import { APP_TEST_UPDATE_STATE, APP_TEST_TOGGLE_DASHBOARD, APP_TEST_UPDATE_SRC } from './action';

const initialState = {
  src: '',
  // src: 'http://10.1.133.60:2001/',
  // src: '//baidu.com',
  // src: 'https://2df.me/PQZcj-jqsaz4', // 线上外卖码
  // src: 'https://2df.me/nR', // 线上店码
  // src: 'https://2df.me/PHshP-7bhkPn', // 线上桌码
}

const reduce = (state = initialState, action = {}) => {
  switch (action.type) {
    case APP_TEST_UPDATE_STATE:
      process.env.NODE_ENV === "production" || console.log('\nAction', action)
      return { ...state, ...action.payload }
    case APP_TEST_UPDATE_SRC:
      const src = action.payload
      process.env.NODE_ENV === "production" || console.log('\nAction', action)
      if (Object.prototype.toString.call(src) !== '[object String]') {
        process.env.NODE_ENV === "production" || console.warn('UpdateSrc actionCreator receive a string parameter')
        return;
      }
      return { ...state, src }
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
