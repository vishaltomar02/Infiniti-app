import { createStore, applyMiddleware } from 'redux';
import rootreducer from '../reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

export default function configureStore()
{
  return createStore(
    rootreducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
};
