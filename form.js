import { useState } from 'react';

export const useSignUpForm = (initialState, callback) => {
  // It's critical to initalise the state even they're empty
  // More details: https://reactjs.org/docs/forms.html#controlled-components
  // Explanation: https://stackoverflow.com/questions/37427508/react-changing-an-uncontrolled-input
  const [inputs, setInputs] = useState(initialState);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      if (callback) {
        callback();
      }
    }
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  }
};
