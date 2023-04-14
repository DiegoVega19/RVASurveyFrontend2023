import React from "react";
import { Link } from "react-router-dom";

const AllSurveys = ({ surveys, titles }) => {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          Lista de Encuestas
        </h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing={0}
          >
            <thead>
              <tr>
                {titles.map((title, i) => (
                  <td key={i}>{title}</td>
                ))}
              </tr>
            </thead>

            <tbody>
              {surveys.map((survey, i) => (
                <tr key={i}>
                  <td>{survey.name}</td>
                  <td>{survey.description}</td>
                  <td>{survey.dateCreated}</td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      ></button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link
                          className="dropdown-item"
                          to={`detail/${survey.id}`}
                        >
                          Ver Reporte
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSurveys;
