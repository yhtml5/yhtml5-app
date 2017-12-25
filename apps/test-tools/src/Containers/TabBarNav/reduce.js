const initialState = {
  selectedTab: 'home',
  hidden: false,
}

const reduce = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'App-TabBarNav-UpdateState':
      process.env.NODE_ENV === "production" || console.log('\nAction', action)
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default reduce
export { updateState }
