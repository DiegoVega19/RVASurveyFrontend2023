import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link, useParams } from "react-router-dom";
import { FakeAnswersData } from "../../../Common/FakeData";
import { getAllAnswers, postAnswer } from "../../../Services/SurveyService";
import All from "../../Dashboard/All";
import QuestionComponent from "../../Misc/QuestionComponent";

export default function AddQuestions() {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [inputType, setInputType] = useState(1);
  const [questionName, setQuestionName] = useState("");
  const [required, setRequired] = useState(false);
  const [inputFields, setInputFields] = useState([
    { optionName: "", spsVariable: "" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const handleAnswersData = () => {
    getAllAnswers(id).then((AllSurveys) =>
      setQuestions(AllSurveys.data.questions)
    );
  };
  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ optionName: "", spsVariable: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "optionName") {
      values[index].optionName = event.target.value;
    } else {
      values[index].spsVariable = event.target.value;
    }
    setInputFields(values);
  };
  const resetForm = (e) => {
    setInputFields([{ optionName: "", spsVariable: "" }]);
    setQuestionName("")
    setRequired(false)
    setInputType(1)
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    alert(JSON.stringify(inputFields, null, 2));
  };
  const handleInput = (e) => {
    setQuestionName(e.target.value);
  };
  const handleSelect = (e) => {
    setInputType(parseInt(e.target.value));
  };
  const handleRequired = () => {
    setRequired(!required);
  };
  const saveQuestion = () => {
    const request = {
      questionName: questionName,
      isRequired: required,
      inputTypeId: inputType,
      surveyId: id,
      options: inputFields,
    };
    postAnswer(request)
      .then(() => setIsOpen(false))
      .catch((err) => console.log(err.response), resetForm());
  };
  useEffect(() => {
    handleAnswersData();
  }, []);
  const showModal = () => {
    setIsOpen(true);
    console.log("hello");
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <All>
      <div className="container-fluid">
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Encuestas</h1>
          <button
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            onClick={showModal}
          >
            <i className="fas fa-download fa-sm text-white-50" /> Add Answers
          </button>
        </div>
        <div className="card shadow mb-4">
          <QuestionComponent questions={questions} />
          <Modal
            show={isOpen}
            onHide={hideModal}
            size="xl"
            onExit={handleAnswersData}
          >
            <Modal.Header>New Question</Modal.Header>
            <Modal.Body>
              <div className="container-fluid">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-sm-6 border-right">
                      <div className="form-group">
                        <label for="" class="control-label">
                          Question
                        </label>
                        <textarea
                          className="form-control"
                          name="question"
                          id=""
                          cols="30"
                          rows="4"
                          placeholder="Ingrese la pregunta"
                          onChange={handleInput}
                        ></textarea>
                        <div className="form-group">
                          <label for="" class="control-label">
                            Question Answer Type
                          </label>
                          <select
                            name="type"
                            id="type"
                            className="custom-select custom-select-sm"
                            onChange={handleSelect}
                          >
                            <option value="1">Radio</option>
                            <option value="2">Checkbox</option>
                          </select>
                        </div>
                        <div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              defaultValue="option1"
                              onChange={handleRequired}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineCheckbox1"
                            >
                              Is Required
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox2"
                              defaultValue="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineCheckbox2"
                            >
                              Is Multiple
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h5 className="d-flex justify-content-center">
                        {questionName === ""
                          ? "Previsualizacion"
                          : questionName}
                      </h5>
                      <form onSubmit={handleSubmit}>
                        <div className="form-row">
                          {inputFields.map((inputField, index) => (
                            <React.Fragment key={`${inputField}~${index}`}>
                              <div className="form-group col-sm-6">
                                <label htmlFor="optionName">Pregunta</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="optionName"
                                  name="optionName"
                                  value={inputField.optionName}
                                  onChange={(event) =>
                                    handleInputChange(index, event)
                                  }
                                />
                              </div>
                              <div className="form-group col-sm-4">
                                <label htmlFor="spsVariable">
                                  SPSS Variable
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="spsVariable"
                                  name="spsVariable"
                                  value={inputField.spsVariable}
                                  onChange={(event) =>
                                    handleInputChange(index, event)
                                  }
                                />
                              </div>
                              <div className="form-group col-sm-2">
                                <button
                                  className="btn btn-danger "
                                  type="button"
                                  onClick={() => handleAddFields()}
                                >
                                  +
                                </button>
                                <button
                                  className="btn btn-primary "
                                  type="button"
                                  onClick={() => handleRemoveFields(index)}
                                >
                                  -
                                </button>
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn-sm btn-danger shadow-sm"
                onClick={hideModal}
              >
                Cancel
              </button>
              <button
                onClick={saveQuestion}
                className="btn btn-sm btn-primary shadow-sm"
              >
                Save
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </All>
  );
}
