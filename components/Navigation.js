export default function Navigation() {
  return (
    <nav class="navbar navbar-expand-sm">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="/images/logo.png"
            alt="all good financial services"
            height="60px"
          ></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link text-dark px-4" href="#">
                <b>HOME</b>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark px-4" href="#">
                <b>ABOUT US</b>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark px-4" href="#">
                <b>OUR SERVICES</b>
              </a>
            </li>
          </ul>
            <button class="btn btn-primary custom-btn" type="button">
              Contact Us Today
            </button>
        </div>
      </div>
    </nav>
  );
}
