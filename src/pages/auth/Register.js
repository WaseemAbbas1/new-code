import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
const initialValue = {firstName:"",lastName:"",email:"",password:""}
export default function Register() {
  const navigate = useNavigate();
  const [formData,setFormData] = useState(initialValue)
  const [users,setUsers] = useState([])
  const {firstName,password,email,lastName} = formData
  useEffect(()=>{
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  },[])
  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const emailRegex =/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  const validate = () => {
    let isValid = true;
  
    if (firstName.trim().length < 3) {
      alert("Please enter your First Name.");
      isValid = false;
      return isValid;
    }
  
    if (!email) {
      alert("Please enter your Email.");
      isValid = false;
      return isValid; 
    } else if (!emailRegex.test(email)) {
      alert("The provided email is not correct.");
      isValid = false;
      return isValid; 
    }
  
    if (!password) {
      alert("Please enter your password.");
      isValid = false;
      return isValid; 
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      isValid = false;
      return isValid; 
    }
  
    return isValid;
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(validate()){
   const userExist = users.find((user)=>user.email === email)
   if(userExist){
    alert("A user with this email already exists.");
   } else{
    const updatedUsers = [...users, formData];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Registration successful!");
    setFormData(initialValue)
    navigate("/auth/login")
   }   
  }
}
  return (
    <main className="login">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card" style={{ width: "100%", maxWidth: "550px" }}>
          <div className="card-body py-3">
            <div className="card-title text-center mb-3">
              <h2>Register</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label htmlFor="inputField1">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputField1"
                    placeholder="Enter your First Name"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="inputField2">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputField2"
                    placeholder="Enter your Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group mb-2">
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
              <div className="form-group mb-2">
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
              <div className="row">
                <div className="col-12 col-md-6 offset-md-3 mt-2">
                  <button type="submit" className="btn btn-dark btn-outline-light w-100">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
