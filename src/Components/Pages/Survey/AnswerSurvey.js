import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllAnswers, getInterviewers } from "../../../Services/SurveyService";
import All from "../../Dashboard/All";
import QuestionSteps from "../../Misc/QuestionSteps";

export default function AnswerSurvey() {
  const { id } = useParams();
  const [isHeader, setIsHeader] = useState(true);
  const startDate = new Date();
  const [questions, setQuestions] = useState([]);
  
  const [interviewers, setInterviewers] = useState([]);
  const initialFormValues = {
    interviewerId: 1,
    surveySetId:id,
    dateCreated: startDate,
    interviewedName: "",
    interviewedPhone: "",
    neighborhood: "",
    municipality: "",
  };
  const [values, setValues] = useState(initialFormValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleAnswersData = () => {
    getAllAnswers(id).then((AllSurveys) =>
      setQuestions(AllSurveys.data.questions)
    );
  };
  const getAllInterviewers=()=>{
    getInterviewers().then((AllInterviewers)=>
    setInterviewers(AllInterviewers.data))
  }
  const handleClick = () => {
    setIsHeader(false);
  };
  useEffect(() => {
    handleAnswersData();
    getAllInterviewers();
  }, []);
  return (
    <div>
      <All>
        <div className="container-fluid">
          {/* Page Heading */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Responder Encuesta</h1>
          </div>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Steps goes here
              </h6>
            </div>
            <div className="card-body">
              {!isHeader ? (
                <QuestionSteps questions={questions} header={values} />
              ) : (
                <div>
                  <div>
                  <label className="d-flex justify-content-start" htmlFor="exampleFormControlSelect1">Encuestador</label>
                  <select
                  onChange={handleChange}
                  className="form-control"
                  id="exampleFormControlSelect1"
                  name="interviewerId"
                >
                  {interviewers.map((interviewer,i) => (
                    <option key={i} value={interviewer.id}>{interviewer.name}</option>
                  ))}
                </select>
                <div className="form-group">
                <label
                  className="d-flex justify-content-start"
                  htmlFor="exampleInputEmail1"
                >
                  Date Created
                </label>
                <input
                  type="date"  
                  className="form-control"              
                  name="dateCreated"
                  onChange={handleChange}
                />
              </div>
                    <div className="form-group">
                      <label className="d-flex justify-content-start" htmlFor="interviewerName">Interviewed Name</label>
                      <input
                        type="text"
                        name="interviewedName"
                        className="form-control"
                        id="interviewerName"
                        aria-describedby="emailHelp"
                        placeholder="Name"
                        onChange={handleChange}
                      />    
                    </div>
                    <div className="form-group">
                      <label className="d-flex justify-content-start" htmlFor="exampleInputPassword1">Interviewed Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Phone"
                        name="interviewedPhone"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="d-flex justify-content-start" htmlFor="Barrio">Barrio del encuestado</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Barrio"
                        aria-describedby="emailHelp"
                        placeholder="Barrio"
                        name="neighborhood"
                        onChange={handleChange}
                      />    
                    </div>
                    <div className="form-group">
                      <label className="d-flex justify-content-start" htmlFor="municipality">Municipio del encuestado</label>
                      <input
                        type="text"
                        className="form-control"
                        id="municipality"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        name="municipality"
                        onChange={handleChange}
                      />    
                    </div>
                    
                  </div>

                  <button className="btn btn-primary" onClick={handleClick}>Save and start</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </All>
    </div>
  );
}
