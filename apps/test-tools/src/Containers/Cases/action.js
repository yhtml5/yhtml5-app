import ActionCreator from '../../Redux/ActionCreator';

// action type
export const APP_TEST_TOGGLE_DASHBOARD = 'APP_TEST_TOGGLE_DASHBOARD'
export const APP_TEST_UPDATE_STATE = 'APP_TEST_UPDATE_STATE'

// action creator
export const toggleDashboard = (bool) => ({ type: APP_TEST_TOGGLE_DASHBOARD, payload: bool })
export const updateState = new ActionCreator(APP_TEST_UPDATE_STATE)
