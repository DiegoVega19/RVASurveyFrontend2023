import React from "react";

export default function QuestionComponent({ questions }) {
  console.log(questions)
  return (
    <div>
      <h3 className="mt-4">Survey Previsualizacion</h3>
      {questions.map((question, i) => (
        <div>
          <h6 className="d-flex justify-content-start m-4 font-weight-bold text-primary">
            {question.questionName}
          </h6>
          {question.options.map((option, i) => (
            <div className="form-check d-flex justify-content-start m-4">
              <input
                className="form-check-input"
                type={question.inputTypeId === 1 ?"radio":"checkbox"}
                name="exampleRadios"
                id={option.id}
                
              />
              <label className="form-check-label" htmlFor={option.id}>
                {option.optionName}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
