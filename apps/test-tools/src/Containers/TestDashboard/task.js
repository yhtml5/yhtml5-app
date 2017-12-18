import { updateState, toggleDashboard } from './action';
import Store from '../../Redux/Store';
// import { push } from 'react-router-redux'
import VConsole from 'vconsole';
const vConsole = new VConsole();
// vConsole.destroy()
// vConsole.hide()

const { dispatch, getState } = Store

export const toggleTestDashboard = ({ }) => {
  const { dashboardVisibility } = getState().testDashboard
  // dashboardVisibility ? vConsole.hide() : vConsole.show()

  dispatch(toggleDashboard())
  console.log('\ntoggleTestDashboard')
}

export default {
  toggleTestDashboard
}


