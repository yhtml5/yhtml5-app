import { updateState } from './action';
import Store from '../../Redux/Store';
import { push } from 'react-router-redux'

const { dispatch, getState } = Store

export const onPress = ({ selectedTab = '', path = '' }) => {
  const oldPathname = getState().router.location.pathname

  if (path !== oldPathname) {
    dispatch(push(path))
  }

  dispatch(updateState({ selectedTab }))

  console.log('\nonPress', {
    oldPathname
  })
}


export default {
  onPress
}


