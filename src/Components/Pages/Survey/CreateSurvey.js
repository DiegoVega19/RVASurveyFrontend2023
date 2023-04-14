import React, { useState } from "react";
import All from "../../Dashboard/All";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { postSurvey } from "../../../Services/SurveyService";

export default function CreateSurvey() {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const initialFormValues = {
    name: "",
    description: "",
    dateCreated: startDate,
  };
  const [values, setValues] = useState(initialFormValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const Handlenavigate=()=>{
    navigate("/survey")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    postSurvey(values)
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
                  Survey Name
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
              <div className="form-group m-4">
                <label
                  className="d-flex justify-content-start"
                  htmlFor="exampleFormControlTextarea1"
                >
                  Survey Description
                </label>
                <textarea
                onChange={handleChange}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="description"
                ></textarea>
              </div>
              <div className="form-group m-4 d-block">
                <label
                  className="d-flex justify-content-start"
                  htmlFor="exampleInputEmail1"
                >
                  Date Created
                </label>
                <input
                  type="date"  
                  className="form-control"
                  onChange={handleChange}
                  name="dateCreated"
                />
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
