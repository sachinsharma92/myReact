import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <a className="nav-link active" href="/About" aria-current="page">About</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/">Conveter</a>
              </li>
            </ul>
            <div className="d-flex">
              <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : 'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.toggleMode} />
                <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
