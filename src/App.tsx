import React, { Fragment, lazy, Suspense } from 'react';
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
import Loader from './components/pages/common/Loader';
const Register = lazy(() => import('./components/pages/register'));
const Login = lazy(() => import('./components/pages/login'));
const Forgotpassword = lazy(() => import('./components/pages/forgotpassword'));
const Verify = lazy(() => import('./components/pages/verifyEmail'));
const Resetpassword = lazy(() => import('./components/pages/resetpassword'));
const NotFound = lazy(() => import('./components/pages/notfound'));
// Components

const App = () => {
  return (
    <Fragment>
      <Router>
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </Router>
    </Fragment>
  );
}

export default App;
