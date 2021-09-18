import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// Routes
import {
  SIGNUP,
  SIGNIN,
  NOT_FOUND
} from './routes/routes';
// Routes

// Components
import Register from "./components/pages/register";
import Login from "./components/pages/login";
import NotFound from './components/pages/notfound';
// Components

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route
            exact
            path={SIGNUP}
            render={() => <Register />}
          />
          <Route
            exact
            path={SIGNIN}
            render={() => <Login />}
          />
          <Route
            exact
            path={NOT_FOUND}
            render={() => <NotFound />}
          />
          <Redirect
            from="*"
            to={NOT_FOUND}
          />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
