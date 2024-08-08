import React, { useState } from 'react';
import '../style.css';

const Sign = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="header">
      <div className="contentform">
        <div className="formtitle">
          {!isSignUp ? (
            <>
            <form className="signinform">
              <h1>Login</h1>
              <input type="text" name="username" placeholder="Username" required />
              <input type="password" name="password" placeholder="Password" required />
              <p><a href="#">Forgot Password?</a></p>
              <p>
                Don't have an Account?{' '}
                <a className="signup" onClick={handleToggleForm}>
                  Sign Up
                </a>
              </p>
              <input type="submit" value="Sign In" />
            </form>
            <div className='fakeform'>
                <h1></h1>
            </div>
            </>
          ) : (
            <>
            <div className='fakeform'>
                <h1>hello</h1>
            </div>
            <form className="signupform">
              <h1>Register</h1>
              <input type="text" name="username" placeholder="Username" required />
              <input type="password" name="password" placeholder="Password" required />
              <input type="password" name="repeatpassword" placeholder="Repeat Password" required />
              <p>
                Already have an Account?{' '}
                <a className="signin" onClick={handleToggleForm}>
                  Sign In
                </a>
              </p>
              <input type="submit" value="Sign Up" />
            </form>
            </>
          )}
        </div>
        <div className={`image ${isSignUp ? 'contentformleft' : ''}`}>
          <h1>Best Website to Keep your money</h1>
        </div>
        <div className="backbtn">
          <a href="/">Back</a>
        </div>
      </div>
    </div>
  );
};

export default Sign;
