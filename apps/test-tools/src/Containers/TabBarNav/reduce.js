const initialState = {
  selectedTab: 'home',
  hidden: false,
}

const reduce = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'App-TabBarNav-UpdateState':
      console.log('\nAction', action)
      return { ...state, ...action.payload }
    default:
      // console.log('\nAction', action)
      return state
  }
}

export default reduce
export { updateState }
