"use client";

export default function Home_Banner() {
  return (
    <>
      <div className="container">
        <div className="home_banner">
          <div className="parent_container">
            <div className="home_container">
              <div className="white_line p-4 mx-3"></div>
              <h1 className="text-white px-3 py-3 font-weight-600">
                We Care about <br /> Your Health & <br />Wealth
              </h1>
              <button
                className="btn banner-btn bg-white text-dark m-3 border-0"
              >
                <b>Read More</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
