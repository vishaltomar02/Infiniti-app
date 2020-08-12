
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

const otherUsers = (state = false, action) => {
  switch(action.type)
  {
    case 'OTHER_USERS_SUCCESSFUL':
      return Object.assign({}, state, {users: action.data});
    case 'OTHER_USERS_FAILED':
      return Object.assign({}, state, {usersError: action.data});
    default: return state;
  }
}


const rootReducer = combineReducers({addUser, loaderReducer, otherUsers});

export default rootReducer;