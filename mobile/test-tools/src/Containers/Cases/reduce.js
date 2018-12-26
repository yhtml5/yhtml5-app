import { APP_TEST_UPDATE_STATE, APP_TEST_TOGGLE_DASHBOARD } from './action';

const initialState = {
  items: [{
    title: 'title',
    content: 'hello'
  }, {
    title: 'title',
    content: 'hello'
  }, {
    title: 'title',
    content: 'hello'
  }, {
    title: 'title',
    content: 'hello'
  }, {
    title: 'title',
    content: 'hello'
  }, {
    title: 'title',
    content: 'hello'
  }, {
    title: 'title',
    content: 'hello'
  }]
}

const reduce = (state = initialState, action = {}) => {
  switch (action.type) {
    case APP_TEST_UPDATE_STATE:
      process.env.NODE_ENV === "production" || console.log('\nAction', action)
      return { ...state, ...action.payload }
    case APP_TEST_TOGGLE_DASHBOARD:
      process.env.NODE_ENV === "production" || console.log('\nAction', action)
      const visibility = action.payload
      let newVisibility;
      if (visibility === undefined) {
        newVisibility = !state.dashboardVisibility
      } else {
        newVisibility = !!visibility
      }
      return { ...state, dashboardVisibility: newVisibility }
    default:
      process.env.NODE_ENV === "production" || console.log('\nAction', action)
      return state
  }
}

export default reduce
