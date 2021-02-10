import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Landing from "../screens/Landing";

const AppRouting = () => {
  return (
    <Router>
      <main>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </main>
    </Router>
  );
};

export default AppRouting;
