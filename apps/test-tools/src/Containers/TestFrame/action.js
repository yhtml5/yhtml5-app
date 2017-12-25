import ActionCreator from '../../Redux/ActionCreator';

// action type
export const APP_TEST_TOGGLE_DASHBOARD = 'APP_TEST_TOGGLE_DASHBOARD'
export const APP_TEST_UPDATE_STATE = 'APP_TEST_UPDATE_STATE'
export const APP_TEST_UPDATE_SRC = 'APP_TEST_UPDATE_SRC'

// action creator
export const toggleDashboard = (bool) => ({ type: APP_TEST_TOGGLE_DASHBOARD, payload: bool })
export const UpdateSrc = (src) => ({ type: APP_TEST_UPDATE_SRC, payload: src })
export const updateState = new ActionCreator(APP_TEST_UPDATE_STATE)
