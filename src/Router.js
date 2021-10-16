import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import RnD from "./pages/RnD/RnD";
import Services from "./pages/Services/Services";

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
          <Services/>
        </Route>

        <Route path="/rnd">
          <RnD/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;
