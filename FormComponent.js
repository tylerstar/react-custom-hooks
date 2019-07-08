const Signup = () => {
  const callback = () => {
    console.log(`first name: ${inputs.firstName}`);
    console.log(`last name: ${inputs.lastName}`);
    console.log(`email: ${inputs.email}`);
    console.log(`password1: ${inputs.password1}`);
    console.log(`password2: ${inputs.password2}`);
  };

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: ""
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(initialState, callback);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
        <label>Last Name</label>
        <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
      </div>
      <div>
        <label>Email Address</label>
        <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1}/>
      </div>
      <div>
        <label>Re-enter Password</label>
        <input type="password" name="password2" onChange={handleInputChange} value={inputs.password2}/>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )
};
