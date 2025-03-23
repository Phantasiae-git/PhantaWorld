import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

interface Service {
  name: string;
  page: string;
}

interface NavbarProps {
  services: Service[];
}

const Navbar = ({ services }: NavbarProps) => {
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home 🏡
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services 🔨
              </a>
              <ul className="dropdown-menu">
              {services.map((service, index) => (
                  <li key={index}>
                    <Link className="dropdown-item" to={service.page}>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About me 👤
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reviews">
                All reviews ⭐
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacts">
                Contacts ☎️
              </Link>
            </li>
      </ul>
      <div className="nav-stripe"></div>
    </div>
  </div>
</nav>
  )
}

{/* <li><hr className="dropdown-divider" /></li> */}

export default Navbar