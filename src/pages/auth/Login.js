import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../sass/_auth.scss";
const initialValue = { email: "", password: "" };
export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialValue);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    setUsers(storedUsers);
    if (storedUsers === null) {
      navigate("/auth/register");
      alert(
        "No users are registered in the database please frist register then try"
      );
      return;
    }
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email.trim();
    password.trim();
    if (email.length === 0) {
      setError("Enter your Email");
      return;
    }
    if (password.length === 0) {
      setError("Enter your password");
      return;
    }
    const user = users.find((user) => user.email === formData.email);
    if (!user) {
      setError("your email is not register");
      return;
    } else if (user.password === formData.password) {
      alert("login successfully");
      setError("");
      setFormData(initialValue);
    } else {
      setError("your password is not correct");
    }
  };
  return (
    <main className="login">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card" style={{ width: "100%", maxWidth: "550px" }}>
          <div className="card-body  py-3">
            <div className="card-title text-center mb-2">
              <h2>Login</h2>
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
                      onChange={onChange}
                      value={formData.email}
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
                      onChange={onChange}
                      value={formData.password}
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
                    Login
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
