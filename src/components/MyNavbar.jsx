import { Button } from "bootstrap";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../logo.png";

let MyNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Navbar variant="dark" expand="lg" sticky="top" className="px-2">
      <Container fluid>
        <Link
          to={"/"}
          className="navbar-brand fw-bold text-ng-variant font-titoli d-flex align-items-center"
        >
          <img
            alt=""
            src={logo}
            width="92"
            height="40"
            className="d-inline-block align-top me-2"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className={"text-center"}>
          <div className="me-auto ms-auto">
            <Nav className="align-items-center">
              <Link
                to={"/"}
                className={`nav-link link-nav ${
                  location.pathname === "/" && "active"
                }`}
              >
                Home
              </Link>
              <Link
                to={"/fumetti"}
                className={`nav-link link-nav ${
                  location.pathname === "/nuove" && "active"
                }`}
              >
                Catalogo fumetti
              </Link>
              <Link
                to={"/promozioni"}
                className={`nav-link link-nav ${
                  location.pathname === "/nuove" && "active"
                }`}
              >
                Promozioni
              </Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
