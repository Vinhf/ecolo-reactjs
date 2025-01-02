import React from "react";

const Sidebar = ({ isOpen }) => (
  <aside id="sidebar" className={`sidebar ${isOpen ? "d-block" : "d-none"}`}>
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/admin/index">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin/category">
          <i className="bi bi-tags"></i>
          <span>Category</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin/product">
          <i className="bi bi-box"></i>
          <span>Product</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin/voucher">
          <i className="bi bi-ticket"></i>
          <span>Voucher</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin/banner">
          <i className="bi bi-gear"></i>
          <span>Banner</span>
        </a>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
