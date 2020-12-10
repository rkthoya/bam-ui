import React from "react";
import User from "./components/views/user";
import Admin from "./components/views/admin";
import Landing from "./components/views/Landing";
import Login from "./components/views/auth/Login";
import Register from "./components/views/auth/Register";
import VerifyEmail from "./components/views/auth/VerifyEmail";
import AccountCreated from "./components/views/auth/AccountCreated";
import RequestPasswordReset from "./components/views/auth/RequestPasswordReset";
import PasswordReset from "./components/views/auth/PasswordReset";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/admin" component={Admin} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Register} />
          <Route path="/account-created" component={AccountCreated} />
          <Route path="/verify-email/:token" component={VerifyEmail} />
          <Route
            path="/request-password-reset"
            component={RequestPasswordReset}
          />
          <Route path="/password-reset/:token" component={PasswordReset} />
        </Switch>
      </Router>
    );
  }
}

export default App;
