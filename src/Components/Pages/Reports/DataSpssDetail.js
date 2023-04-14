import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllAnswers, getReports } from "../../../Services/SurveyService";
import All from "../../Dashboard/All";
import TableData from "../../Misc/TableData";
import TableSpss from "../../Misc/TableSpss";

function DataSpssDetail() {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [reports, setReports] = useState([]);
  const titles = ["Name", "Description", "Date Created", "Options"];
  const handleAnswersData = () => {
    getAllAnswers(id).then((AllSurveys) =>
      setQuestions(AllSurveys.data.questions)
    );
  };
  const handlerReportsData = () => {
    getReports(id).then((AllReports) => setReports(AllReports.data));
  };
  useEffect(() => {
    handlerReportsData();
    handleAnswersData();
  }, []);
  
  return (
    <div>
      <All>
        <div className="container-fluid">
          {/* Page Heading */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Reporte Encuestas</h1>
          </div>
          {/* <AllSurveys surveys={surveys} titles={titles} /> */}
          <TableSpss titles={questions} reports={reports} />
        </div>
      </All>
    </div>
  );
}

export default DataSpssDetail;
