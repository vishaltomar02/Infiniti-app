export const addUserAction = (user) => {
  console.log(user)
  return  {
    type: 'ADD_USER',
    data: {...user}
  }
}

const showLoader = () => {
  return {
    type: 'SHOW_LOADER',
    data: true
  }
}

const hideLoader = () => {
  return {
    type: 'HIDE_LOADER',
    data: false
  }
}

const fetchUsersSuccessful = (data) => {
  console.log(data);
  return {
    type: 'OTHER_USERS',
    data: data
  }

}

const fetchUsersFailed = (error) => {
  console.log(error);
}

export const fetchUsers = () => {
  return dispatch => {
      dispatch(showLoader());
      console.log('fetching');
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          dispatch(hideLoader());
          dispatch(fetchUsersSuccessful(res));
          return res.products;
      })
      .catch(error => {
          dispatch(fetchUsersFailed(error));
      })
  }
}