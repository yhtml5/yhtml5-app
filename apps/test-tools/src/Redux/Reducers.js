
import tabBarNav from '../Containers/TabBarNav/reduce';
import testDashboard from '../Containers/TestDashboard/reduce';
import testFrame from '../Containers/TestFrame/reduce';
import cases from '../Containers/Cases/reduce';

/**
 *
 */

// Redux prescribes that you concentrate your model update logic
// in a certain layer of your application (“stores” in Flux, “reducers” in Redux)


export default {
  tabBarNav,
  testDashboard,
  testFrame,
  cases
}
