import React from "react";
import { HomeDefault } from "./pages";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { AuthProvider } from "./provider/auth-user-provider";
import { Reset } from "./pages/reset";
import { Shortener } from "./pages/shortner";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./style/main.scss";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomeDefault />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/reset" exact>
            <Reset />
          </Route>
          <Route path="*">
            <Shortener />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
