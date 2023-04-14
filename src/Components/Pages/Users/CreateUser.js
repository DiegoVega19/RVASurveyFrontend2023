import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSurvey, registerUser } from "../../../Services/SurveyService";
import All from "../../Dashboard/All";

function CreateUser() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const initialFormValues = {
    name: "",
    email: "",
    password: "",
    lastName: "",
  };
  const [values, setValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleCheckbox = () => {
    setIsAdmin(!isAdmin);
  };
  const Handlenavigate=()=>{
    navigate("/users")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    const data = {...values,isAdmin}
    console.log(data)
    registerUser(data)
      .then(()=> 
     Handlenavigate()
      )
      .catch((err) => console.log(err.response.data.errors.description));
  };
  return (
    <div>
      <All>
        <div className="container-fluid">
          {/* Page Heading */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Create Survey</h1>
          </div>
          <div className="card shadow mb-4">
            <form onSubmit={handleSubmit}>
              <div className="form-group m-4 d-block">
                <label
                  className="d-flex justify-content-start"
                  htmlFor="exampleInputEmail1"
                >
                  Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="name"
                />
              </div>
              <div className="form-group m-4 d-block">
                <label
                  className="d-flex justify-content-start"
                  htmlFor="exampleInputEmail1"
                >
                  LastName
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="lastName"
                />
              </div>
              <div className="form-group m-4 d-block">
                <label
                  className="d-flex justify-content-start"
                  htmlFor="exampleInputEmail1"
                >
                  Email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                />
              </div>
              <div className="form-group m-4 d-block">
                <label
                  className="d-flex justify-content-start"
                  htmlFor="exampleInputEmail1"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="password"
                />
              </div>
              <div className="form-group d-flex justify-content-start m-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onChange={handleCheckbox}
                    type="checkbox"
                    defaultValue
                    id="invalidCheck2"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck2">
                    Is Admin
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary m-4 d-flex justify-content-start"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </All>
    </div>
  );
}

export default CreateUser;
