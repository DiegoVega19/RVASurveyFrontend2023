import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getInterviewers } from '../../../Services/SurveyService';
import All from '../../Dashboard/All';
import TableComponent from '../../Misc/TableComponent';
import UserTable from '../../Misc/UserTable';

function UserList() {
    const [interviewers, setInterviewers] = useState([]);
  const titles = ["Name", "Email", "Enabled", "Options"];

  const getAllInterviewers = () => {
    getInterviewers()
      .then((AllInterviewers) => setInterviewers(AllInterviewers.data))
      .catch((err) => console.log(err));
    console.log(interviewers);
  };

  useEffect(() => {
    getAllInterviewers();
    console.log("hello");
  }, []);
  return (
    <div>
    <All>
      <div className="container-fluid">
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Administracion de usuarios</h1>
          <Link
            to={"/createUser"}
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50" /> Crear
            Usuario
          </Link>
        </div>
        <UserTable interviewers={interviewers} titles={titles} />
      </div>
    </All>
  </div>
  )
}

export default UserList