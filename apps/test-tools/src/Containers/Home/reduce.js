import { APP_TEST_UPDATE_STATE } from './action';

const initialState = {
}

const reduce = (state = initialState, action = {}) => {
  switch (action.type) {
    case APP_TEST_UPDATE_STATE:
      process.env.NODE_ENV === "production" || console.log('\nAction', action)
      return { ...state, ...action.payload }
    default:
      process.env.NODE_ENV === "production" || console.log('\nAction', action)
      return state
  }
}

export default reduce
