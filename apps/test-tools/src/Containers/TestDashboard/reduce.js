import { APP_TEST_UPDATE_STATE, APP_TEST_TOGGLE_DASHBOARD } from './action';

const initialState = {
  dashboardVisibility: false,
}

const reduce = (state = initialState, action = {}) => {
  switch (action.type) {
    case APP_TEST_UPDATE_STATE:
      console.log('\nAction', action)
      return { ...state, ...action.payload }
    case APP_TEST_TOGGLE_DASHBOARD:
      console.log('\nAction', action)
      const visibility = action.payload
      let newVisibility;
      if (visibility === undefined) {
        newVisibility = !state.dashboardVisibility
      } else {
        newVisibility = !!visibility
      }
      return { ...state, dashboardVisibility: newVisibility }
    default:
      console.log('\nAction', action)
      return state
  }
}

export default reduce
