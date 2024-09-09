import React,{useContext, useState} from "react";
import { AuthContext } from "../../context/AuthContext";
const initialValue={email: "", password :"" }
export default function Home1() {
  const [error,setError]= useState("")
  const [state,setState]= useState(initialValue)
const {isAuth, dispatch,user} = useContext(AuthContext)
const {email,password} =state
const validation = ()=>{
  let isValid = true;
  
 

  if (!email) {
    setError("Please enter your Email.");
    isValid = false;
    return isValid; 
  } 

  if (!password) {
    setError("Please enter your password.");
    isValid = false;
    return isValid; 
  } else if (password.length < 8) {
    setError("Password must be at least 8 characters.");
    isValid = false;
    return isValid; 
  }

  return isValid;
}  
const handleSubmit =(e)=>{
    e.preventDefault();
  if(validation()){
    dispatch({type:"SET_LOGGED_IN",payload:state})
setError("")
setState(initialValue)
  }
  }
  const handleLoggout=()=>{
dispatch({type:"SET_LOGGED_OUT"})
  }
  const handleChange= (e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }
  
  return (
    <>
       <main >
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card mt-5" style={{ width: "100%", maxWidth: "550px" }}>
          <div className="card-body  py-5">
            <div className="card-title text-center mb-2">
              <h2>Login</h2>
              <h2>{user.email}</h2>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <form >
              <div className="row">
                <div className="col">
                  <div className="form-group mb-3">
                    <label htmlFor="inputField3">Email</label>
                    <input
                      type="email"
                      className="form-control "
                      id="inputField3"
                      placeholder="Enter Your Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group mb-3">
                    <label htmlFor="inputField4">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputField4"
                      placeholder="Enter Your Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
               {!isAuth?
               <div className="col-12 col-md-6 offset-md-3 mt-3">
                 <button
                    onClick={handleSubmit}
                    className={`btn btn-dark w-100`}
                    >
                   Login 
                  </button>
                </div>:
                <div className="col-12 col-md-6 offset-md-3 mt-3">
                  <button
                    onClick={handleLoggout}
                    className={`btn btn-light w-100`}
                    >
                   Logout
                  </button>
                </div>
                  }
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
