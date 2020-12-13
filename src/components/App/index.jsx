import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

/* Pages */
import Login from '../../pages/Login/index.jsx';
import Menu from '../../pages/Menu/index.jsx'
import Tables from '../../pages/Tables/index.jsx'
import Profiles from '../../pages/Profiles/index.jsx'
import Kitchen from '../../pages/Kitchen/index.jsx'

/* Components */
import Layout from '../Layout/index.jsx'

/* Constants */
import { TOKEN, USER } from '../../utils/constants/itemsLocalStorage'
import ROUTES from '../../utils/constants/routes'

/* Hooks */
import useGetItemFromLocalStorage from '../../utils/Hooks/useGetItemFromLocalStorage'

const App = () => {
  const [token] = useGetItemFromLocalStorage(TOKEN)
  const user = JSON.parse(window.localStorage.getItem(USER))

  const signInPath = () => {
    if (token) {
      if (user?.role !== 'chef') {
        return <Redirect to={ROUTES.TABLES} />
      }
      return <Redirect to={ROUTES.KITCHEN} />
    }
    return <Login />
  }

  const adminAndWaiterPath = (component) => {
    if (token) {
      if (user?.role !== 'chef') {
        return component
      }
      return <Redirect to={ROUTES.KITCHEN} />
    }
    return <Redirect to={ROUTES.SIGN_IN} />
  }

  return (
    <Router>
      <Layout>
        <Switch>
          {/* <Route exact path="/Login"><Login /></Route>
          <Route exact path="/Menu"><Menu/></Route>
          <Route exact path="/Tables"><Tables/></Route>
          <Route exact path="/Profiles"><Profiles/></Route>
          <Route exact path="/Kitchen"><Kitchen/></Route> */}
          <Route exact path={ROUTES.SIGN_IN}>
            {signInPath()}
          </Route>
          <Route exact path={ROUTES.MENU} >
            {adminAndWaiterPath(<Menu />)}
          </Route>
          <Route exact path={ROUTES.TABLES}>
            {adminAndWaiterPath(<Tables />)}
          </Route>
          <Route exact path={ROUTES.PROFILES}>
            {token && user?.role === 'admin' ? <Profiles/> : <Redirect to={ROUTES.SIGN_IN} />}
          </Route>
          <Route exact path={ROUTES.KITCHEN}>
            {token && user?.role === 'chef' ? <Kitchen/> : <Redirect to={ROUTES.SIGN_IN} />}
          </Route>
          <Route>
            <Redirect to={ROUTES.SIGN_IN} /> : <Profiles/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
};

export default App;
