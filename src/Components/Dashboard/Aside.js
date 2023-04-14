import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">
          RVSurvey <sup>2</sup>
        </div>
      </Link>
      {/* Divider */}
      {/* Nav Item - Dashboard */}
      {/* Heading */}
      <hr className="sidebar-divider d-none d-md-block" />
      <div className="sidebar-heading">Sistema</div>
      {/* Nav Item - Pages Collapse Menu */}
      {/* Nav Item - Charts */}
      <li className="nav-item">
        <Link className="nav-link" to="/survey">
          <i className="fas fa-fw fa-chart-area" />
          <span>Encuestas</span>
        </Link>
        <Link className="nav-link" to="/takeSurvey">
          <i className="fas fa-fw fa-chart-area" />
          <span>Responder Encuestas</span>
        </Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />
      <div className="sidebar-heading">Reportes</div>
      {/* Nav Item - Pages Collapse Menu */}
      {/* Nav Item - Charts */}
      <li className="nav-item">
        <Link className="nav-link" to="/dataReports">
          <i className="fas fa-fw fa-chart-area" />
          <span>Reporte Respuestas</span>
        </Link>
        <Link className="nav-link" to="/dataReportSpss">
          <i className="fas fa-fw fa-chart-area" />
          <span>Reporte Spss</span>
        </Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />
      <div className="sidebar-heading">Administracion</div>
      {/* Nav Item - Pages Collapse Menu */}
      {/* Nav Item - Charts */}
      <li className="nav-item">
        <Link className="nav-link" to="/users">
          <i className="fas fa-fw fa-chart-area" />
          <span>Agregar Usuarios</span>
        </Link>
      </li>
      {/* Nav Item - Tables */}

      {/* Divider */}
    </ul>
  );
};

export default Aside;
