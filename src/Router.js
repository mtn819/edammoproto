import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from "./components/Nav/Nav";

function Router() {
  return (
    <BrowserRouter>
      <Nav/>

      <Switch>

        <Route path="/aboutus">
          About Us
        </Route>

        <Route path="/casestudies">
          Case Studies
        </Route>

        <Route path="/industries">
          Industries
        </Route>

        <Route path="/services">
          Services
        </Route>

        <Route path="/rnd">
          R&amp;D
        </Route>

        <Route path="/">
          Home
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;
