import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import DevTools from '../containers/DevTools/DevTools';

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)

var configureStore;

switch (process.env.NODE_ENV) {
  case 'development':
    configureStore = (initialState) => {
      const store = createStore(rootReducer, initialState, enhancer);

      if (module.hot) {
        module.hot.accept('./reducer', () =>
          store.replaceReducer(require('./reducer'))
        );
      }

      return store;
    }
    break;
  case 'production':
    configureStore = (initialState) => {
      return createStore(rootReducer, initialState, enhancer)
    }
    break;
  default:
    configureStore = (initialState) => {
      return createStore(rootReducer, initialState, enhancer)
    }
}

export default configureStore;
