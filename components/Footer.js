"use client";

export default function Footer() {
  return (
    <div className="container py-5">
      <div className="row align-items-center d-flex justify-content-center">
        <div className="col-md-3">
          <a className="navbar-brand" href="#">
            <img
              src="/images/logo.png"
              alt="all good financial services"
              height="60px"
            ></img>
          </a>
        </div>
        <div className="col-md-3">
          <h6>Follow us:</h6>
          <i
            className="fa-brands fa-facebook px-2"
            style={{ color: "#00428c" }}
          ></i>
          <i
            className="fa-brands fa-square-instagram px-2"
            style={{ color: "#00428c" }}
          ></i>
          <i className="fa-brands fa-twitter px-2" style={{ color: "#00428c" }}></i>
        </div>
        <div className="col-md-3">
          <h6>30 Commercial Road Fratton, Australia</h6>
        </div>
        <div className="col-md-3">
          <h6>Telephone: 682-376-8733 eidl@allgoodservices.net</h6>
        </div>
      </div>
    </div>
  );
}
