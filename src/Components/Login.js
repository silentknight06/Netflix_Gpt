import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const[isSignInForm, setIsSignForm] = useState(true);

    const toggleSignInForm = ()=>{
      setIsSignForm(!isSignInForm);
    }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>

      <form className="absolute rounded-lg bg-black p-12 w-4/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">
        
         {isSignInForm?"Sign In " : "Sign Up"}
         </h1>
        
         {!isSignInForm&& <input
          type="text"
          placeholder="Enter Full Name"
          className="p-3 my-4 w-full bg-gray-700"
        />
       }

        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700"
        />

    

         <input
          type="password"
          placeholder="Enter Password"
          className="p-3 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer"> {isSignInForm?"Sign In " : "Sign Up"} </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}> 
        {isSignInForm?"New to Netflix? Sign Up Now " : "Already Registered? Sign In Now "}
        
        </p>
      </form>
    </div>
  );
};
export default Login;
