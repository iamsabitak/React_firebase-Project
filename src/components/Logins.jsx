import React from "react";
import { auth } from "../Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Logins() {
  const googleClick = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth,provider);
    console.log(result);
  };
  return (
    <>
      <div className="conatainer">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <img
          onClick={googleClick}
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            style={{ width: "15%" }}
            alt="Google Login"
          />
        </div>
      </div>
    </>
  );
}

export default Logins;
