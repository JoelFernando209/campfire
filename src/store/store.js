import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import userReducer from './reducers/userReducer';
import channelsReducer from './reducers/channelsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  channels: channelsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;