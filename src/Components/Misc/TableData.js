import React from "react";
import { FakeAnswers } from "../../Common/FakeAnswer";
import reactHtmlTableToExcel from "react-html-table-to-excel";
import { Button } from "react-bootstrap";
import ReactHtmlTableToExcel from "react-html-table-to-excel";

function TableData({ reports, titles }) {
  console.log(FakeAnswers)
  console.log(titles);
  console.log(reports)
  console.log()
  return (
    <div>
    <ReactHtmlTableToExcel
              id="exportar"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mb-5"
              table="tblData"
              filename="dataTextReport"
              sheet="Pagina 1"
              buttonText= "Descargar"
              
        
  >
            </ReactHtmlTableToExcel>
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
            id="tblData"
            width="100%"
            cellSpacing={0}
          >
            <thead>
              <tr>
                <td>Encuestado</td>
                <td>Municipio</td>
                <td>Barrio</td>
                {titles.map((title, i) =>
                  
                    title.options.map((question, u) => (
                      <td className={title.inputTypeId === 1 ? 'text-success': 'text-danger'} key={u}>{title.questionName}</td>
                    ))
                  
                )}
              </tr>
            </thead>

            <tbody>
              {
                reports.length === 0 ?(
                  <td >Cargando...</td>
                ) : (
                reports.survey_info_headers.map((survey, i) => (
                <tr key={i}>
                  <td>{survey.interviewedName}</td>
                  <td>{survey.municipality}</td>
                  <td>{survey.neighborhood}</td>
                  {
                    survey.answers.map((answer,u)=>(
                      <td key={u}>{answer.answerSelected}</td>
                    ))
                  }
                </tr>
              )))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default TableData;
