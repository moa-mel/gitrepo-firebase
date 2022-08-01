import React from "react";
import { useUserContext } from "../context/userContext";

const Auth = () => {

    const { signInWithGithub } = useUserContext();

    return (
      <div className="container" style={{display: 'flex', alignItems: 'center',
      justifyContent: 'center',  minHeight: '100vh', flexDirection: 'column'}}>
        <button onClick={signInWithGithub}> Continue with GitHub </button>
      </div>
    );
  };
  
  export default Auth;
