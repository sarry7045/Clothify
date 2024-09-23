import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../Utils/FireBase.js";
import Form from "../SubComponents/Form.jsx";
import Button from "../SubComponents/Button.jsx";
import "../SCSS/SignIn.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Incorred Password");
      } else if (error.code === "auth/user-not-found") {
        alert("No user Associated with this Email");
      }
      console.log(error);
    }
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an a user account?</h2>
      <span>Sign in with your email and password</span>
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
        <div className="buttons-container">
          <Button type="submit" onClick={handleSubmit}>
            Sign In
          </Button>
          <Button type="submit" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
