import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmitAnswer from "./SubmitAnswer";
export default function QuestionSteps({ questions, header }) {
  console.log(questions)
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [finish, setFinish] = useState(false);
  const [selectedInput, setSelectedInput] = useState("");
  const [selectedId,setSelectedId] = useState([]);
  const [selectedSpss,setSelectedSpss] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(questions[index].options.length).fill(false)
  );
  const [backArray, setBackArray] = useState([])
  console.log(questions[index].options.length);
  const [selectedText, setSelectedText] = useState([]);

  const [inputFields, setInputFields] = useState([]);
  const handleCancelClick = () => {
    navigate("/takeSurvey");
  };
  //Con esta reiniciamos los checks
  const resetAllChecks = () => {
    const values = new Array(questions[index].options.length).fill(false);
    setCheckedState(values);
  };
  
  const createArrayInfo =()=>{
    const dat1 = []
    for(var i= 0; i<questions.length; i++){
      for(let u = 0; u<questions[i].options.length; u++){
         dat1.push({answerSelected: "Not answered", optionId: `${questions[i].options[u].id}`,variableSelected:0})
        
      }
      
    }
    console.log(dat1)
    setBackArray(dat1)
  }
  const isSelected = (value) => selectedInput === value;

  useEffect(() => {
    createArrayInfo()
  }, [])
  
  const addValues = () => {
    const values = [...inputFields];
    selectedText.forEach((element,index) => {
      console.log(element);
      
        values.push({ answerSelected: element, optionId: iterateIds(index),variableSelected:iterateVariables(index) });
      
      setInputFields(values);
    });

  };
  // const updateInfoForBackend(){
  //   //code here
  // }
  const iterateIds =(item)=>{
    return selectedId[item]
  }
  const iterateVariables =(item)=>{
    return selectedSpss[item]
  }
  const handleNextClick = () => {
    if (index === questions.length - 1) {
      setFinish(true);
      addValues();
    } else {
      if (questions[index].isRequired === 1 && selectedText.length === 0) {
        console.log("Esta pregunta es requirida no puede quedar vacia");
      } else {
        setIndex(index + 1);
        addValues();
        setSelectedText("");
        setSelectedInput("");
        resetAllChecks();
        setSelectedSpss([])
        setSelectedId([])
      }
    }
  };
  const handleDataChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);
    console.log(e.target.id)
    //setSelectedId(e.target.id)
    const spss = e.target.getAttribute("spss-variable");
    setSelectedId(arr =>[...selectedId, e.target.id])
    console.log(`spss vairable ${spss}`)
    setSelectedSpss(arr =>[...selectedSpss,spss])
    if (e.target.type === "radio") {
      if (checked) {
        setSelectedText([value]);
        setSelectedInput(value);
      }
      // Case 2  : The user unchecks the box
      else {
        setSelectedText([]);
      }
    } else {
      if (checked) {
        setSelectedText([...selectedText, value]);
      }
      // Case 2  : The user unchecks the box
      else {
        setSelectedText(selectedText.filter((e) => e !== value));
      }
    }
  };
  const handleCheckboxChange = (e, position) => {
    //esto es nuevo
    console.log(e.target.id)
   // setSelectedId(e.target.id)
   setSelectedId(arr =>[...selectedId, e.target.id])
    //GetSpssVariable
    const spss = e.target.getAttribute("spss-variable");
    setSelectedSpss(arr =>[...selectedSpss,spss])
    const updatedCheckedState = checkedState.map((item, i) =>
      i === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    //Destructuring
    const { value, checked } = e.target;
    console.log(`${e.target.value} is ${e.target.checked}`);
    if (e.target.type === "radio") {
      if (e.target.checked) {
        setSelectedText([e.target.value]);
      }
      // Case 2  : The user unchecks the box
      else {
        setSelectedText([]);
      }
    } else {
      if (e.target.checked) {
        setSelectedText([...selectedText, e.target.value]);
      }

      // Case 2  : The user unchecks the box
      else {
        setSelectedText(selectedText.filter((e) => e !== value));
      }
    }
  };
  
  return (
    <div>
      {finish ? (
        <SubmitAnswer data={inputFields} header={header} backInfo={backArray} />
      ) : (
        <div>
          <h1>{JSON.stringify(inputFields)}</h1>
          <h6 className="d-flex justify-content-start m-4 font-weight-bold text-primary">
            {questions[index].questionName}
          </h6>
          {questions[index].options.map((option, i) => (
            <div className="form-check d-flex justify-content-start m-4">
              {questions[index].inputTypeId === 1 ? (
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="example"
                    spss-variable={option.spsVariable}
                    id={option.id}
                    value={option.optionName}
                    checked={isSelected(`${option.optionName}`)}
                    onChange={handleDataChange}
                  />
                  <label className="form-check-label" htmlFor={option.id}>
                    {option.optionName}
                  </label>
                </div>
              ) : (
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="example"
                    id={option.id}
                    spss-variable={option.spsVariable}
                    value={option.optionName}
                    checked={checkedState[i]}
                    onChange={(e) => handleCheckboxChange(e, i)}
                  />
                  <label className="form-check-label" htmlFor={option.id}>
                    {option.optionName}
                  </label>
                </div>
              )}
            </div>
          ))}
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
            onClick={handleNextClick}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}
