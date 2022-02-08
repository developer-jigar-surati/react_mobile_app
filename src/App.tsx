import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// Routes
import {
  SIGNUP,
  SIGNIN,
  FORGOT_PASSWORD,
  VERIFY,
  RESET_PASSWORD,
  VERIFICATION_TOKEN,
  NOT_FOUND
} from './routes/routes';
// Routes

// Components
import Register from "./components/pages/register";
import Login from "./components/pages/login";
import Forgotpassword from "./components/pages/forgotpassword";
import Verify from './components/pages/verifyEmail';
import Resetpassword from './components/pages/resetpassword';
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
            path={FORGOT_PASSWORD}
            render={() => <Forgotpassword />}
          />
          <Route
            exact
            path={`${RESET_PASSWORD}${VERIFICATION_TOKEN}`}
            render={() => <Resetpassword />}
          />
          <Route
            exact
            path={`${VERIFY}${VERIFICATION_TOKEN}`}
            render={() => <Verify />}
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
