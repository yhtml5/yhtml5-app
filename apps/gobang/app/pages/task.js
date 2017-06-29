import { isObject, isArrayEmpty } from '../util/validator'
import { UpdateState } from './action'
import { drawChessBoard } from '../Components/Chessboard/index'

/* ===== base =====*/

function updateState(data) {
  if (isObject(data)) {
    return {
      type: UpdateState,
      payload: data
    }
  } else {
    console.error('action updateState params must be a object')
  }
}

function init() {
  drawChessBoard('canvas')
}

/* ===== index =====*/

const toggleStatus = (id, status) =>
  async (dispatch, getState) => {
    process.env.NODE_ENV === 'production' || console.log('toggleStatus', id, status)
    const params = getState().packages
    const type = getState().packages.formType

    await ajaxToggleStatus(id, status)
      .catch((err) => console.error(err))

    if (history.location.pathname === '/packages') {
      dispatch(updateState({
        tableLoading: true
      }))
      await ajaxList(dispatch, {
        ...params
      })
        .catch((err) => console.error(err))
      dispatch(updateState({
        tableLoading: false
      }))
    }

    if (type === 'edit' || type === 'add') {
      await ajaxEditInfo(dispatch, id)
        .catch((err) => console.error(err))
    }

  }

/* ===== add/edit =====*/

const add = (value) =>
  async (dispatch, getState) => {
    process.env.NODE_ENV === 'production' || console.log('add', getState(), value)

    dispatch(updateState({
      formSaveLoading: true
    }))
    const params = getState().packages

    await ajaxAdd(dispatch, {
      ...value
    })
      .then(() => {
        dispatch(updateState({ formSaveDisabled: true }))
        dispatch(checkColumn())
        // message.destroy()
        message.success('新增成功')
      })
      .catch((err) => console.error(err))

    dispatch(updateState({
      formSaveLoading: false
    }))

  }

const toEdit = (id) =>
  async (dispatch, getState) => {
    console.log('toEdit', getState(), id)

    dispatch(updateState({
      formId: id,
      packageId: id,
      formChannel: undefined,
      formColumn: undefined,
      formLabel: undefined,
    }))

    history.push('/packages/edit')

    await ajaxEditInfo(dispatch, id)
      .then(() => {
        dispatch(checkColumn())
      })
      .catch((err) => console.error(err))

    // dispatch(updateState({modalLoading: false,}))
  }

const edit = (value) =>
  async (dispatch, getState) => {
    console.log('edit', getState(), value)
    const id = getState().packages.packageId

    dispatch(updateState({
      formSaveLoading: true
    }))

    await ajaxEdit(dispatch, {
      ...value,
      id
    })
      .then(() => {
        message.success('编辑成功')
        dispatch(updateState({}))
      })
      .catch((err) => console.error(err))

    dispatch(updateState({
      formSaveLoading: false,
    }))
  }



export {
  updateState,
  init,
  toggleStatus,
  add,
  edit,
  toEdit,
}
