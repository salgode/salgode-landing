import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContainer from "../components/AppContainer/AppContainer";
import MainView from "./MainView";
import HowToView from "./HowToView";
import DownloadView from "./DownloadView";
import ContactView from "./ContactView";
import NotFoundView from "./NotFoundView";
import TermsView from "./TermsView";

const AppRouter = () => (
  <BrowserRouter>
    <AppContainer>
      <Switch>
        <Route path="/como-funciona" component={HowToView} />
        <Route path="/descarga" component={DownloadView} />
        <Route path="/contactanos" component={ContactView} />
        <Route path="/terminos" component={TermsView} />
        <Route path="/" component={MainView} />
        <Route component={NotFoundView} />
      </Switch>
    </AppContainer>
  </BrowserRouter>
);

export default AppRouter;
