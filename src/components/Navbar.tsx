import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="nav-stripe"></div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home 🏡</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Services 🔨
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">About me 👤</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">All reviews ⭐</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacts ☎️</a>
        </li>
      </ul>
      <div className="nav-stripe"></div>
    </div>
  </div>
</nav>
  )
}

export default Navbar