import { useState, useEffect } from "react";

export default function useFormValidation(signUp, initialValues) {
  const [formValues, setFormValues] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const [isFormSubmitting, setFormSubmitting] = useState(false);

  useEffect(() => {
    if (isFormSubmitting) {
      if (!Object.keys(errors).length)
      {
        signUp && signUp({...formValues});
        // setFormValues(initialValues);
      }
      else setFormSubmitting(false);
    }
  }, [errors]);

  function handleValuesChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    setErrors({...errors, [e.target.name]: ''});
  }

  function validateValues() {
    const { name, email, password, city } = formValues;
    const errors = {};

    if (!name) errors.name = "Please enter the name value";
    if (!email) errors.email = "Please enter the email value";
    if (!password) errors.password = "Please enter the password";
    if (!city) errors.city = "Please enter the city";

    if(email && !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(email)) 
    {
      errors.email = "Please enter a valid email address";
    }
    if(password && !(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/).test(password))
    {
      errors.password = "Password must include at least one uppercase, one lowercase, one special and a digit character(8-15)."
    }
    return errors;
  }

  function handleSubmit(e) {
    e.stopPropagation();
    const errorsObject = validateValues();
    setErrors(errorsObject);
    setFormSubmitting(true);
  }

  return {
    handleValuesChange,
    handleSubmit,
    formValues,
    errors,
    isFormSubmitting,
  };
}
