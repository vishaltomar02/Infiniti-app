import React, {useEffect} from 'react';
import UserDetailsComponent from './components/UserDetailsComponent';
import ChartsComponent from './components/Charts/ChartsComponent';
import { connect } from 'react-redux';
import * as actions from './actions/actions';
import OtherUsers from './components/OtherUsers';

function ContentPage(props) 
{
  const { userDetails, fetchUsers, otherUsers } = props;
  console.log(userDetails, otherUsers);

  useEffect(() => {
    fetchUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="content-page">
      <div className="details">
        <UserDetailsComponent userDetails={userDetails}/>
        <ChartsComponent/>
        <OtherUsers users={otherUsers}/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.addUser.user,
    otherUsers: state.otherUsers.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(actions.fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentPage);