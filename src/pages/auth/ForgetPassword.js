import React,{useState,useEffect} from "react";
import{useNavigate} from "react-router-dom"
const initialValue = { email: "", password: "" };
export default function ForgetPassword() {
  const navigate = useNavigate();
  const [formData, setFormData]= useState(initialValue)
  const [users , setUsers] =useState([])
  const [error , setError]= useState("")
const {email,password} = formData
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers === null) {
      navigate("/auth/register");
      alert(
        "No users are registered in the database please frist register then try"
      );
    }
    else{
      setUsers(storedUsers);
    }
  },[]);
  const onChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    email.trim();
    password.trim();
    if (email.length === 0) {
      setError("Enter your Email");
      return;
    }
   
   const checkIndex =users.findIndex((user)=>user.email=== email)
    if(checkIndex === -1){
    setError("your enter email is not register please register frist")
    }else{
      if (password.length === 0) {
        setError("Enter your password");
        return;
      }
      if (password.length < 8) {
        setError("Password must be at least 8 characters");
        return;
      }
      const updatedUsers = [...users]
      updatedUsers[checkIndex] = {...updatedUsers[checkIndex],password}
      setUsers(updatedUsers)
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setError("")
      alert("Password change")
      setFormData(initialValue)
    }
  }
  return (
    <main className="login">
       <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card" style={{ width: "100%", maxWidth: "550px" }}>
          <div className="card-body  py-3">
            <div className="card-title text-center mb-2">
              <h2>Forget Password</h2>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
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
                      onChange={onChange}
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
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 offset-md-3 mt-3">
                  <button
                    type="submit"
                    className="btn btn-dark btn-outline-light w-100"
                  >
                    Submit
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
