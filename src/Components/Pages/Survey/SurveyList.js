import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSurveys } from "../../../Services/SurveyService";
import All from "../../Dashboard/All";
import TableComponent from "../../Misc/TableComponent";

const SurveyList = () => {
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
            <Link
              to={"/createsurvey"}
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-download fa-sm text-white-50" /> Create New
              Survey
            </Link>
          </div>
          <TableComponent surveys={surveys} titles={titles} />
        </div>
      </All>
    </div>
  );
};

export default SurveyList;
