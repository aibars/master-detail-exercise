import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  const enhancers = [];
  const windowIfDefined = typeof window === 'undefined' ? null : window;
  if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
  }


  return createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(thunkMiddleware, loggerMiddleware), ...enhancers),
  );
}