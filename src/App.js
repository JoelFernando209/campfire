import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import './App.scss';

import Channels from './containers/Pages/Channels/Channels';

const App = () => {
  return (
    <>
      <Redirect from='/' to='/channels' />
      <Route exact path='/channels' component={Channels} />
    </>
  );
}

export default App;
