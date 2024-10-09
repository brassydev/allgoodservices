export default function Footer() {
  return (
    <div className="container py-5">
      <div class="row align-items-center d-flex justify-content-center">
        <div class="col-md-3">
          <a class="navbar-brand" href="#">
            <img
              src="/images/logo.png"
              alt="all good financial services"
              height="60px"
            ></img>
          </a>
        </div>
        <div class="col-md-3">
          <h6>Follow us:</h6>
          <i
            class="fa-brands fa-facebook px-2"
            style={{ color: "#00428c" }}
          ></i>
          <i
            class="fa-brands fa-square-instagram px-2"
            style={{ color: "#00428c" }}
          ></i>
          <i class="fa-brands fa-twitter px-2" style={{ color: "#00428c" }}></i>
        </div>
        <div class="col-md-3">
          <h6>30 Commercial Road Fratton, Australia</h6>
        </div>
        <div class="col-md-3">
          <h6>Telephone: 682-376-8733 eidl@allgoodservices.net</h6>
        </div>
      </div>
    </div>
  );
}
