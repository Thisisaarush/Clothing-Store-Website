import React, { useState } from "react";

// style
import "./SignIn.style.scss";

// components
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton";

// firebase
import { auth, signInWithGoogle } from "../../firebase/Firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log(e);
    }

    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span className="title">Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          id="email"
          name="email"
          value={email}
          label="Email"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          id="password"
          name="password"
          value={password}
          label="Password"
          handleChange={handleChange}
          required
        />
        <div className="button-container">
          <CustomButton type="submit" value="submit form">
            Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
