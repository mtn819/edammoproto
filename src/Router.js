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
import ServicesPredictiveModeling from "./pages/Services/ServicesPredictiveModeling";
import ServicesAcceleratedBusinessIntelligence from "./pages/Services/ServicesAcceleratedBusinessIntelligence";
import ServicesPartnerProductDevelopment from "./pages/Services/ServicesPartnerProductDevelopment";
import ServicesAiEnabledAutomation from "./pages/Services/ServicesAiEnabledAutomation";
import Industries from "./pages/Industries/Industries";

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
          <Industries/>
        </Route>

        <Route path="/services/aienabledautomation">
          <ServicesAiEnabledAutomation/>
        </Route>

        <Route path="/services/partnerproductdevelopment">
          <ServicesPartnerProductDevelopment/>
        </Route>

        <Route path="/services/acceleratedbusinessintelligence">
          <ServicesAcceleratedBusinessIntelligence/>
        </Route>

        <Route path="/services/predictivemodeling">
          <ServicesPredictiveModeling/>
        </Route>

        <Route path="/services">
          <Services/>
        </Route>

        <Route path="/rnd">
          <RnD/>
        </Route>

        <Route path="/getstarted">
          GET STARTED
        </Route>

        <Route path="/">
          <Home/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;
