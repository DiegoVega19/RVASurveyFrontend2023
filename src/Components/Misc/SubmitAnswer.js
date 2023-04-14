import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { takeSurvey } from "../../Services/SurveyService";

export default function SubmitAnswer({ data, header, backInfo }) {
  console.log(data);
  console.log(header);
  console.log("back info")
  const [formatedData, setformatedData] = useState([])  
  const navigate = useNavigate();

  const handleCancelClick = () => {
    Handlenavigate();
  };
  const Handlenavigate = () => {
    navigate("/takeSurvey");
    console.log("guardado con exito");
  };
  const iterateData = () =>{
    for(let i = 0; i<data.length; i++){
      updateInfo(data[i])
    }
    console.log("que onda diego")
    console.log(backInfo)
    setformatedData(backInfo)
  }
  const updateInfo = (value) =>{
   console.log(value.optionId)
   console.log(backInfo)
   //Nos falta ver como quedan los datos
    const finItem = backInfo.find(item => item.optionId === value.optionId)
    finItem.variableSelected  = value.variableSelected
    finItem.answerSelected = value.answerSelected
    console.log(backInfo)
  }
  const handleSubmit = () => {
    iterateData()
    const request = {
      ...header,
      answers: backInfo,
    };
    takeSurvey(request)
      .then(() => Handlenavigate())
      .catch((err) => console.log(err.response));
  };

  return (
    <div>
      <h1>Encuesta finalizada con exito</h1>
      <button
        type="button"
        className="btn btn-lg btn-primary"
        onClick={handleCancelClick}
      >
        Cancel Survey
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-lg ml-4"
        onClick={handleSubmit}
      >
        Save Survey
      </button>
    </div>
  );
}
