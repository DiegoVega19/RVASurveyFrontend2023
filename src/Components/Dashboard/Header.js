import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* Sidebar Toggle (Topbar) */}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars" />
        </button>
        {/* Topbar Search */}
       
        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
         
         
          {/* Nav Item - User Information */}
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="/" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Username</span>
              <img className="img-profile rounded-circle" src={"data:image/png;base64,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"} />
            </a>
            {/* Dropdown - User Information */}
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
             
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>

    )
}

export default Header
