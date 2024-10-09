"use client";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/images/logo.png"
            alt="all good financial services"
            height="60px"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link text-dark px-4" href="#">
                <b>HOME</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark px-4" href="#">
                <b>ABOUT US</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark px-4" href="#">
                <b>OUR SERVICES</b>
              </a>
            </li>
          </ul>
            <button className="btn btn-primary custom-btn" type="button">
              Contact Us Today
            </button>
        </div>
      </div>
    </nav>
  );
}
