import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../Utils/FireBase.js";
import Form from "../SubComponents/Form.jsx";
import Button from "../SubComponents/Button.jsx";
import "../SCSS/Signup.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Confirm Password does'nt match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email is Already in use");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an Account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* <label className={`${displayName.length ? "shrink" : ""} form-input-label`}> Display Name</label>
                    <input className='form-input' type='text' required name='displayName' value={displayName} onChange={handleChange} />

                    <label className={`${email.length ? "shrink" : ""} form-input-label`}>Email</label>
                    <input className='form-input' type='email' required name='email' value={email} onChange={handleChange} />

                    <label className={`${password.length ? "shrink" : ""} form-input-label`}>Password</label>
                    <input className='form-input' type='password' required name='password' value={password} onChange={handleChange} />

                    <label className={`${confirmPassword.length ? "shrink" : ""} form-input-label`}>Confirm Password</label>
                    <input className='form-input' required name='confirmPassword' value={confirmPassword} onChange={handleChange} /> */}

        <Form
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <Form
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <Form
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <Form
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
