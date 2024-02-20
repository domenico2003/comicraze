import { Col, Container, Row } from "react-bootstrap";
import { FaMapMarkerAlt, FaMapPin } from "react-icons/fa";
import { MdContactSupport, MdEmail } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { PiPhoneIncomingFill } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from "../logo.png";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {
        <div className=" text-white p-4 pb-1 mt-5 navbar">
          <Container className="justify-content-center">
            <Row className="w-100">
              <Col
                xs={12}
                md={9}
                className="d-flex flex-column align-items-center align-items-md-start mb-4 mb-md-0"
              >
                <img src={logo} alt="" className="logo-footer" />
              </Col>
              <Col
                xs={12}
                md={3}
                className="d-flex flex-column align-items-center  align-items-md-start position-relative"
              >
                <div>
                  <p className="d-block mb-1 ">
                    <span className="fw-bold underline-red h5 m-0  justify-content-center justify-content-md-start text-ng-variant d-flex align-items-center">
                      <PiPhoneIncomingFill className="me-1" /> Cell:
                    </span>

                    <a className="h6 m-0" href="tel:+39 366 980 4031">
                      +39 366 980 4031
                    </a>
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <p className="d-block mb-1 ">
                    <span className="fw-bold underline-red h5 m-0 justify-content-center justify-content-md-start text-ng-variant d-flex align-items-center">
                      <MdEmail className="me-1" /> Email:
                    </span>

                    <a
                      className="h6 fw-bold m-0"
                      href="mailto:domdat03@gmail.com"
                    >
                      domdat03@gmail.com
                    </a>
                  </p>
                </div>{" "}
                <div className="d-flex align-items-center justify-content-center">
                  <p className="d-block mb-3 ">
                    <span className="fw-bold underline-red h5 m-0 justify-content-center justify-content-md-start  text-ng-variant d-flex align-items-center">
                      <FaMapMarkerAlt className="me-1" /> Indirizzo:
                    </span>

                    <p className="h6 m-0">Siderno(RC) Calabria, Italia</p>
                  </p>
                </div>
                <div className="d-flex justify-content-around w-100">
                  {" "}
                  <a
                    className="h5 fw-bold m-0"
                    href="https://www.linkedin.com/in/domenico-dattilo/"
                  >
                    <FaLinkedin />
                  </a>{" "}
                  <a
                    className="h5 fw-bold m-0"
                    href="https://github.com/domenico2003"
                  >
                    <FaGithub />
                  </a>{" "}
                  <span className="h5 fw-bold m-0 pointer">
                    <FaInstagram />
                  </span>
                </div>
              </Col>
            </Row>{" "}
            <small className="crediti text-center mt-4">
              © creato da:{" "}
              <a
                href="https://domenico-dattilo-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Domenico Dattilo
              </a>
            </small>
          </Container>
        </div>
      }
    </>
  );
};
export default Footer;
