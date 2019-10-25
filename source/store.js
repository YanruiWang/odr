import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'; //Import the reducer

export const store = createStore(rootReducer, applyMiddleware(thunk));

