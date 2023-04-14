import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSurveys } from "../../../Services/SurveyService";
import All from "../../Dashboard/All";
import AnswerTable from "../../Misc/AnswerTable";

export default function TakeSurveyList() {
  const [surveys, setSurveys] = useState([]);
  const titles = ["Name", "Description", "Date Created", "Options"];
  const getAllSurveys = () => {
    getSurveys()
      .then((Allsurveys) => setSurveys(Allsurveys.data))
      .catch((err) => console.log(err));
    console.log(surveys);
  };
  useEffect(() => {
    getAllSurveys();
    console.log("hello");
  }, []);
  return (
    <div>
      <All>
        <div className="container-fluid">
          {/* Page Heading */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Encuestas</h1>
          </div>
          <AnswerTable surveys={surveys} titles={titles} />
        </div>
      </All>
    </div>
  );
}
