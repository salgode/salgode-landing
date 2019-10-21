
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainView from  './MainView';
import HowToView from './HowToView';
import SocialView from './SocialView';
import ContactView from './ContactView';
import  NotFoundView from './NotFoundView';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/como-funciona' component={HowToView} />
      <Route path='/medios-de-comunicacion' component={SocialView} />
      <Route path='/contactanos' component={ContactView} />
      <Route path='/' component={MainView} />
      <Route component={NotFoundView} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter;