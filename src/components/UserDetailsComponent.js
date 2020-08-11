import React from 'react';

function UserDetailsComponent({ userDetails }) {

  return (
    <>
      <section className="user-details">
        <h2>
          Your Details:
        </h2>
        <div className="user-details-inner">
          <div>
            <h3>
              Name:&nbsp;&nbsp;{userDetails.name}
            </h3>
          </div>
          <div>
            <h3>
              Email:&nbsp;&nbsp;{userDetails.email}
            </h3>
          </div>
          <div>
            <h3>
              City:&nbsp;&nbsp;{userDetails.city}
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserDetailsComponent;