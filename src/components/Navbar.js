import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.navBrand}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            {/* <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onClick={props.toggleMode}
            />
            <label className={`form-check-label" for="flexSwitchCheckChecked text-${props.mode==='light'?'Dark':'light'}`}>
              Dark Mode
            </label> */}
            <input
              type="radio"
              className="btn-check"
              name="options"
              id="option1"
              autoComplete="off"
              onClick={() => {props.toggleMode('dark')}}
            />
            <label className="btn btn-dark mx-1" htmlFor="option1">
              Dark Mode
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options"
              id="option2"
              autoComplete="off"
              onClick={() => {props.toggleMode('secondary')}}
            />
            <label className="btn btn-secondary mx-1" htmlFor="option2">
              Radio
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options"
              id="option3"
              autoComplete="off"
              onClick={() => {props.toggleMode('primary')}}
            />
            <label className="btn btn-primary mx-1" htmlFor="option3">
              Disabled
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options"
              id="option4"
              autoComplete="off"
              onClick={() => {props.toggleMode('warning')}}
            />
            <label className="btn btn-warning mx-1" htmlFor="option4">
              Radio
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  navBrand: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  aboutText: "About",
};
