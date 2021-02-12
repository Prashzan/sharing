import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import StdLogin from "../screens/Login";
import OrgLogin from "../screens/OrgLogin";
import Landing from "../screens/Landing";
import OrgRegister_1 from "../screens/OrgRegister_1";
import OrgRegister_2 from "../screens/OrgRegister_2";
import StdRegister_1 from "../screens/StdRegister_1";
import StdRegister_2 from "../screens/StdRegister_2";

const AppRouting = () => {
  return (
    <Router>
      <main>
        <Route exact path="/" component={Landing} />
        <Route path="/org_login" component={OrgLogin} />
        <Route path="/org_register_1" component={OrgRegister_1} />
        <Route path="/org_register_2" component={OrgRegister_2} />
        <Route path="/std_register_1" component={StdRegister_1} />
        <Route path="/std_register_2" component={StdRegister_2} />
      </main>
    </Router>
  );
};

export default AppRouting;

// <Route path="/std_login" component={StdLogin} />
