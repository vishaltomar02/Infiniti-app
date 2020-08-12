import React from 'react';

export default function OtherUsers(props) {
  console.log(props);
  const { users } = props;
  return (
    <div className="users-container">
      {users && users.map((item) => {
        return (
          <section key={item.id} className="user-card">
            <div>
              <span><i className="far fa-user" /></span>
              <h1>{item.name}</h1>
            </div>
            <div>
              <span><i className="far fa-envelope" /></span>
              <h1>{item.email}</h1>
            </div>
            <div>
              <span><i className="far fa-building" /></span>
              <h1>{item.company.name}</h1>
            </div>
            <div>
              <span><i className="fas fa-phone" /></span>
              <h1>{item.phone}</h1>
            </div>
          </section>
        );
      })}
    </div>
  );
}