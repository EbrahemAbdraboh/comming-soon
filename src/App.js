import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/scss/style.scss";


import LandingPage from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/"}
          component={LandingPage}
        />

      </Switch>
    </Router>
  );
}

export default App;
