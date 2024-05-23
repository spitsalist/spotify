import React from "react";
import "../components/styles/Login.css";
import spotifyLogo from "../assets/spotify.svg";
import appleLogo from "../assets/apple.svg";
import googleLogo from "../assets/google.svg";
import xLogo from "../assets/x.svg";

const Login = () => {
  return (
    <div className="login-container">
      <img src={spotifyLogo} alt="Spotify Logo" className="logo" />
      <h1>LIFE IS WASTED ON THE LIVING</h1>
      <p>Sign in</p>
      <p>with</p>
      <div className="login-buttons">
        <button className="login-button">
          <img src={appleLogo} alt="Apple" />
        </button>
        <button className="login-button">
          <img src={googleLogo} alt="Google" />
        </button>
        <button className="login-button">
          <img src={xLogo} alt="X" />
        </button>
      </div>
    </div>
  );
};

export default Login;
