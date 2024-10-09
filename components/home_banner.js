"use client";

export default function Home_Banner() {
  return (
    <>
      <div className="container pt-4">
        <div className="home_banner">
          <div className="parent_container">
            <div className="home_container">
              <div className="white_line p-4 mx-3"></div>
              <h3 className="text-white px-3 py-3">
                We Care about <br></br> Your Health & <br></br>Wealth
              </h3>
              <button
                className="btn btn-primary bg-white text-blue m-3"
                type="button"
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
