import React from 'react'
import { Link } from "react-router-dom";
const HeaderGlobal = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-warning">
        <Link className="navbar-brand" to="/">CRUD</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/categorias">Categorias</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/productos">Productos</Link>
            </li>

          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
  )
}

export default HeaderGlobal
