import React, { useEffect, useState } from "react";

const initialValue = { title: "", location: "", description: "" };
export default function Home() {
  const [formData, setFormData] = useState(initialValue);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const { title, location, description } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validate = () => {
    let isValid = true;

    if (title.trim().length < 3) {
      setError("Please enter your title right.");
      isValid = false;
      return isValid;
    }
    if (location.trim().length < 3) {
      setError("Please enter your location right.");
      isValid = false;
      return isValid;
    }
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const updatedTodos = [...todos, formData];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodos(updatedTodos)
      setError("");
      alert("todo add");
      setFormData(initialValue);
    }
  };
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedUsers);
  }, []);
  return (
    <main>
      <div className="container d-flex justify-content-center align-items-center mb-5 ">
        <div className="card mt-5" style={{ width: "100%", maxWidth: "550px" }}>
          <div className="card-body  py-3">
            <div className="card-title text-center mb-2">
              <h2>Add todo</h2>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="inputField2">Title</label>
                    <input
                      type="text"
                      className="form-control "
                      id="inputField2"
                      placeholder="Enter Your Title"
                      name="title"
                      value={title}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="inputField3">Location</label>
                    <input
                      type="text"
                      className="form-control "
                      id="inputField3"
                      placeholder="Enter Your Location"
                      name="location"
                      value={location}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group mb-3">
                    <label htmlFor="inputField4">Description</label>
                    <textarea
                      className="form-control"
                      id="inputField4"
                      placeholder="Enter Your description"
                      name="description"
                      rows="5"
                      value={description}
                      style={{ resize: "none" }}
                      onChange={onChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 offset-md-3 mt-3">
                  <button
                    type="submit"
                    className="btn btn-dark btn-outline-light w-100"
                  >
                    Add Todo
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {todos.length > 0 ? (
        <div className="container table-responsive">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Location</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((user, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{user.title}</td>
                    <td>{user.location}</td>
                    <td>{user.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-data-message">No data available</div>
      )}
    </main>
  );
}
