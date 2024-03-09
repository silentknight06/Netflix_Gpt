import { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const[isSignInForm, setIsSignForm] = useState(true);
 const[errorMessage, seterrorMessage] = useState(null);
//  const navigate = useNavigate();
const dispatch = useDispatch()


 const name = useRef(null);
const email = useRef(null);
const password = useRef(null);

   const handleButtonClick = ()=>{
       //validate the form data 
    
    const message =  checkvalidData(email.current.value, password.current.value);
    seterrorMessage(message);
    if(message)return;
    if(!isSignInForm){
        // signup logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up -
          const user = userCredential.user;
         
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR,
          }).then(() => {
            // Profile updated!
            // dispatch(
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );

            // navigate("/browse");
          }).catch((error) => {

            seterrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode +" " + errorMessage);
          // ..
        });

    }else{
        // sign in Logic

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
       .then((userCredential) => { 
        const user = userCredential.user;
   
        // navigate("/browse");
     
  })
        .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         seterrorMessage(errorCode + "-" + errorMessage);
   });
    }
   }

    const toggleSignInForm = ()=>{
      setIsSignForm(!isSignInForm);
    }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt=""
        />
      </div>

      <form onSubmit={(e)=>{
        e.preventDefault()
      }} className="absolute rounded-lg bg-black p-12 w-4/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">
        
         {isSignInForm?"Sign In " : "Sign Up"}
         </h1>
        
         {!isSignInForm&& <input ref={name}
          type="text"
          placeholder="Enter Full Name"
          className="p-3 my-4 w-full bg-gray-700"
        />
       }

        <input ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700"
        />

         <input ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-3 my-4 w-full bg-gray-700"
        />
         
         <p className="text-red-600 font-bold text-lg py-2 ">{errorMessage}</p>


        <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer" onClick={handleButtonClick}> {isSignInForm?"Sign In " : "Sign Up"} </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}> 
        {isSignInForm?"New to Netflix? Sign Up Now " : "Already Registered? Sign In Now "}
        
        </p>
      </form>
    </div>
  );
};
export default Login;
