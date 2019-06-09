import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/">Search</NavLink>
          <NavLink to="/saved">Saved</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
