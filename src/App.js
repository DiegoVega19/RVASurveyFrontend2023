import './App.css';
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import { Login } from './Components/Pages/Auth/Login';
import  Error404  from './Components/Dashboard/Error404'
import Home from './Components/Pages/Auth/Home';
import SurveyList from './Components/Pages/Survey/SurveyList';
import CreateSurvey from './Components/Pages/Survey/CreateSurvey';
import AddQuestions from './Components/Pages/Survey/AddQuestions';
import TakeSurveyList from './Components/Pages/Survey/TakeSurveyList';
import AnswerSurvey from './Components/Pages/Survey/AnswerSurvey';
import DataReports from './Components/Pages/Reports/DataReports';
import DataReportDetail from './Components/Pages/Reports/DataReportDetail';
import DataSpss from './Components/Pages/Reports/DataSpss';
import DataSpssDetail from './Components/Pages/Reports/DataSpssDetail';
import UserList from './Components/Pages/Users/UserList';
import CreateUser from './Components/Pages/Users/CreateUser';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/survey' element={<SurveyList/>} />
        <Route path='/createsurvey' element={<CreateSurvey/>} />
        <Route path='survey/addQuestions/:id' element={<AddQuestions/>} />
        <Route path='/survey' element={<SurveyList/>} />
        <Route path='/takeSurvey' element={<TakeSurveyList/>} />
        <Route path='takeSurvey/answerQuestions/:id' element={<AnswerSurvey/>} />
        <Route path='/dataReports' element={<DataReports/>} />
        <Route path='/dataReports/detail/:id' element={<DataReportDetail/>} />
        <Route path='/dataReportSpss' element={<DataSpss/>} />
        <Route path='/dataReportSpss/detail/:id' element={<DataSpssDetail/>} />
        <Route path='/users' element={<UserList/>} />
        <Route path='/createUser' element={<CreateUser/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
