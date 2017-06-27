function createStore(reducer, initialState) {
    var currentReducer = reducer
    var currentState = initialState
    var listener = () => {}

    return {
        getState() {
            return currentState;
        },
        dispatch(action) {
            currentState = currentReducer(currentState, action)
            listener()
            return action
        },
        subscribe(newListener) {
            listener = newListener
        }
    }
}