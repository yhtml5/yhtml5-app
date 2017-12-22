import { updateState, toggleDashboard } from './action';
import Store from '../../Redux/Store';
// import { push } from 'react-router-redux'

const { dispatch, getState } = Store

export const toggleTestDashboard = ({ }) => {
  const { dashboardVisibility } = getState().testDashboard
  // dashboardVisibility ? vConsole.hide() : vConsole.show()

  dispatch(toggleDashboard())
  console.log('\ntoggleTestDashboard')
}

export const goToHtml5Test = () => {
  window.open('http://html5test.com/')
}

export const tabChange = ({
  index = '',
  tab = ''
}) => {
  console.log('onChange', index, tab);
  dispatch(updateState({
    page: index
  }))
}

export default {
  toggleTestDashboard,
  goToHtml5Test,
  tabChange
}


