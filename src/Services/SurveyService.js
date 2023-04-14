import axios from "axios";
import axiosClient from "./AxiosClient";

export async function getSurveys(){
  return  axiosClient.get('/surveys');
}
export async function postSurvey(survey){
    return  axiosClient.post('/createSurvey',survey);
  }

export async function getAllAnswers(id){
  return axiosClient.get(`/surveysWithQuestions/${id}`)
}  
export async function postAnswer(answer){
  return  axiosClient.post('/createAnswer',answer);
}
export async function getInterviewers(){
  return  axiosClient.get('/interviewers');
}

export async function takeSurvey(answers){
  return  axiosClient.post('/takeSurvey',answers);
}

export async function getReports(id){
  return  axiosClient.get(`/reports/${id}`);
}

export async function registerUser(user){
  return  axiosClient.post('/registerInterviewer',user);
}



