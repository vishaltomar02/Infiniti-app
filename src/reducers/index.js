
import { combineReducers } from 'redux'

const INITIAL_STATE = {
  user: {}
}

const addUser = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch(action.type)
  {
    case 'ADD_USER':
      return Object.assign({}, state, { user: {...action.data}});
    default: return state;
  }
}

const loaderReducer = (state = false, action) => {
  switch(action.type)
  {
    case 'SHOW_LOADER':
      return Object.assign({}, state, {loader: action.data});
    case 'HIDE_LOADER':
      return Object.assign({}, state, {loader: action.data});
    default: return state;
  }
}

const rootReducer = combineReducers({addUser, loaderReducer});

export default rootReducer;