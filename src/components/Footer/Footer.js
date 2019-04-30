import React from "react";
// import { Link } from "react-router";
import "./Footer.scss";

export default function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Linkovi</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a
                  href="http://www.its.edu.rs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-angle-double-right" />
                  ITS
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3schools.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-angle-double-right" />
                  W3
                </a>
              </li>
              <li>
                <a
                  href="https://www.pivzdarija.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-angle-double-right" />
                  Pivzdarija
                </a>
              </li>
              <li>
                <a
                  href="https://www.wikipedia.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-angle-double-right" />
                  Wikipedia
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Alati</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-angle-double-right" />
                  React
                </a>
              </li>
              <li>
                <a
                  href="https://sass-lang.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-angle-double-right" />
                  Scss
                </a>
              </li>
              <li>
                <a
                  href="https://www.react-spring.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-angle-double-right" />
                  React-Spring
                </a>
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-angle-double-right" />
                  Bootstrap
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="/#" target="_blank">
                  <i
                    className="fa fa-angle-double-right"
                    rel="noopener noreferrer"
                  />
                  Home
                </a>
              </li>
              <li>
                <a href="/info">
                  <i
                    className="fa fa-angle-double-right"
                    rel="noopener noreferrer"
                  />
                  Info
                </a>
              </li>
              <li>
                <a href="/piva">
                  <i
                    className="fa fa-angle-double-right"
                    rel="noopener noreferrer"
                  />
                  Piva
                </a>
              </li>
              <li>
                <a href="/predstavljamo">
                  <i
                    className="fa fa-angle-double-right"
                    rel="noopener noreferrer"
                  />
                  Predstavljamo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="soc">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-envelope" />
                </a>
              </li>
            </ul>
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center ">
              <p className="h6">
                {" "}
                All right Reversed.
                <br />
                <a
                  className="text-green ml-2"
                  href="https://github.com/andrijaDomazet/Pivotopija"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  InformationTechnologySchool
                  <br />
                  Andrija/Bojan/Darko
                  <br />
                  JavaScriptGrupa1-GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
