import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import history from './Redux/history';
import Store from './Redux/Store';
import Home from './Routes/Home.jsx';
import TabBarNav from './Containers/TabBarNav/index.jsx';
// import Demo from './Routes/Demo.jsx';
// import Analysis from './Routes/Analysis.jsx';
// import Setting from './Routes/Setting.jsx';


const App = () => {
  return (<Provider store={Store}>
    { /* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/analysis" component={Analysis} />
        <Route path="/demo" component={Demo} />
        <Route path="/setting" component={Setting} /> */}
      </Switch>
    </ConnectedRouter>
  </Provider>)
}


export default App
