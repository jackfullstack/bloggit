import React from "react";
import { Link } from "react-router-dom";
import '../scss/custom.scss';

const NavBar = () => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Bloggit</span>
      <div>
        <ul class="nav">
          <li class="nav-item">
              <Link to="/" class="nav-link" >Home</Link>
          </li>
          <li class="nav-item">
              <Link to="/about" class="nav-link">About</Link>
          </li>
          <li class="nav-item">
              <Link to="/articles-list" class="nav-link">Articles-List</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
