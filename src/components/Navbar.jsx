import React from 'react'
import { Link } from 'react-router-dom'
import { IoFastFoodSharp } from "react-icons/io5"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}>Make Your Food</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'} >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>{<IoFastFoodSharp />}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
