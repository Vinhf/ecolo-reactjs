import React from "react";

const Header = ({ toggleSidebar }) => (
  <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="d-flex align-items-center justify-content-between">
      <a href="/admin/index" className="logo d-flex align-items-center">
        <img src="../../assets/logo/logo.png" alt="" />
        <span className="d-none d-lg-block">ECOLO-Admin</span>
      </a>
      <i className="bi bi-list toggle-sidebar-btn" onClick={toggleSidebar}></i>
    </div>

    <div className="search-bar">
      <form className="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
        <button type="submit" title="Search">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>

    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li className="nav-item d-block d-lg-none">
          <a className="nav-link nav-icon search-bar-toggle" href="#">
            <i className="bi bi-search"></i>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-bell"></i>
            <span className="badge bg-primary badge-number">4</span>
          </a>
          {/* Add dropdown content here */}
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-chat-left-text"></i>
            <span className="badge bg-success badge-number">3</span>
          </a>
          {/* Add dropdown content here */}
        </li>
        <li className="nav-item dropdown pe-3">
          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src="../assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
            <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
          </a>
          {/* Add profile dropdown content here */}
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
