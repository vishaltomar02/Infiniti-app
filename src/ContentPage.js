import React from 'react';
import UserDetailsComponent from './components/UserDetailsComponent';
import ChartsComponent from './components/Charts/ChartsComponent';
import { connect } from 'react-redux';

function ContentPage(props) 
{
  const { userDetails } = props;
  console.log(userDetails);
  return (
    <div className="content-page">
      <div className="details">
        <UserDetailsComponent userDetails={userDetails}/>
        <ChartsComponent/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.addUser.user
  }
}

export default connect(mapStateToProps, null)(ContentPage);