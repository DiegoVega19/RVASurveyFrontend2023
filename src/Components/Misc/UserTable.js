import React from 'react'
import { Link } from 'react-router-dom'

function UserTable({ interviewers, titles }) {
  console.log(interviewers)
    return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          Lista de Usuarios
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
              {interviewers.map((user, i) => (
                <tr key={i}>
                  <td>{`${user.name} ${user.lastName}`}</td>
                  <td>{user.email}</td>
                  <td>{user.isEnabled}</td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link className="dropdown-item" to={"/createUser"}>
                          Editar
                        </Link>
                        <button className="dropdown-item" to={""}>
                          Eliminar
                        </button>
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
  )
}

export default UserTable