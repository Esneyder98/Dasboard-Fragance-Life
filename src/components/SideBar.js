import React from "react";
import image from "../assets/images/logoFraganceLife.png";
import ContentWrapper from "./ContentWrapper";
import LastFraganceInDb from "./LastFraganceInDb";
import GenresInDb from "./GenresInDb/GenresInDb";
import ProductsList from "./ProductsList";
import UsersList from "./UsersList/UsersList";
import ContentRowMovies from "./ContentRowMovies";
import ProductDetail from "./ProductDetail";
import Chart from "./Chart";
import Error from "./Error";
import { Link, Routes, Route } from "react-router-dom";

function SideBar(props) {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon">
            <img
              className="w-100"
              height={65}
              src={image}
              alt="Fragance Life"
            />
          </div>
        </Link>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Fragance Life</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/LastFraganceInDb">
            <i className="fas fa-fw fa-folder"></i>
            <span>Last FraganceInDb</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/GenresInDb">
            <i className="fas fa-fw fa-folder"></i>
            <span>Marcas</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/ProductsList">
            <i className="fas fa-fw fa-folder"></i>
            <span>Productos</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/UsuariosList">
            <i className="fas fa-fw fa-folder"></i>
            <span>Usuarios</span>
          </Link>
        </li>
        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/table">
            <i className="fas fa-fw fa-table"></i>
            <span>Tablas</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}
      <Routes>
        <Route path="/" element={<ContentWrapper />} />
        <Route path="/LastFraganceInDb" element={<LastFraganceInDb />} />
        <Route path="/ProductsList" element={<ProductsList />} />
        <Route path="/ProductsList/:id" element={<ProductDetail />} />
        <Route path="/UsuariosList" element={<UsersList />} />
        <Route path="/ContentRowMovies" element={<ContentRowMovies />} />
        <Route path="/GenresInDb" element={<GenresInDb />} />
        <Route path="/table" element={<Chart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </React.Fragment>
  );
}
export default SideBar;
