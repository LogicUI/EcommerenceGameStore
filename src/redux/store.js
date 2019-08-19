import thunkMiddleWare from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
const middlewares = [logger, thunkMiddleWare];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
