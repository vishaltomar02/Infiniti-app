import React from 'react';
import useFormValidation from './customHook/useFormValidation';
import * as actions from './actions/actions';
import { connect } from 'react-redux';
import './App.css';

const initialValues = { name: '', email: '', password: '', city: '' };

function SignUpPage(props) {
  const { addUser, fetchUsers, history } = props;

  const signUp = (values) => {
    addUser(values);
    history.push({pathname: 'content-page'});
    fetchUsers();
  }

  const {
    handleValuesChange,
    handleSubmit,
    formValues: values,
    errors,
    isFormSubmitting,
  } = useFormValidation(signUp, initialValues);

  return (
    <div className="form-container">
      <div className="form-inner">
        <div className="form-label">Create &nbsp; An &nbsp;Account</div>
        <div className="form-input">
          <label htmlFor="name">
            <i className="far fa-user" />
          </label>
          <input
            type="text"
            value={values.name}
            placeholder="Full Name"
            className={`input-control ${errors.name && 'input-error'}`}
            autoFocus
            onChange={(e) => handleValuesChange(e)}
            name="name"
            id="name" />
          {errors.name && <div className="input-error-text">{errors.name}</div>}
        </div>
        <div className="form-input">
          <label htmlFor="email">
            <i className="far fa-envelope" />
          </label>
          <input
            type="text"
            values={values.email}
            placeholder="Email"
            className={`input-control ${errors.email && 'input-error'}`}
            name="email"
            onChange={(e) => handleValuesChange(e)}
            id="email" />
          {errors.email && <div className="input-error-text">{errors.email}</div>}
        </div>
        <div className="form-input">
          <label htmlFor="password">
            <i className="fas fa-mobile-alt" />
          </label>
          <input
            type="password"
            value={values.password}
            placeholder="Password"
            className={`input-control ${errors.password && 'input-error'}`}
            name="password"
            onChange={(e) => handleValuesChange(e)}
            id="password" />
          {errors.password && <div className="input-error-text">{errors.password}</div>}
        </div>
        <div className="form-input">
          <label htmlFor="city">
            <i className="fas fa-map-marked-alt" />
          </label>
          <input
            type="text"
            placeholder="City"
            value={values.city}
            className={`input-control ${errors.city && 'input-error'}`}
            name="city"
            onChange={(e) => handleValuesChange(e)}
            id="city"
            maxLength="200" />
          {errors.city && <div className="input-error-text">{errors.city}</div>}
        </div>
        {/* <div className="form-input">
            <label htmlFor="age">
              <i class="far fa-id-badge" />
            </label>
            <input
              type="number"
              placeholder="Age"
              className="input-control"
              name="Age"
              id="age"
              maxLength="3" />
          </div> */}
        <div className="submit-button">
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            disabled={isFormSubmitting}
          >Sign-Up</button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => dispatch(actions.addUserAction(user)),
    fetchUsers: () => dispatch(actions.fetchUsers())
  }
}

export default connect(null, mapDispatchToProps)(SignUpPage);
