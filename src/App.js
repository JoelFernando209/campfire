import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.scss';

import Channels from './containers/Pages/Channels/Channels';

const App = () => {
  return (
    <>
      <Switch>
        <Route path='/channels/:channelId' component={Channels} />
        <Route path='/channels' component={Channels} />
        <Redirect from='/' to='/channels' />
      </Switch>
    </>
  );
}

export default App;
