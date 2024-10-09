"use client";

export default function Feedback() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 m-0">
            <video
              className="video_container center"
              height="360"
              autoPlay
              muted
              loop
            >
              <source src="/images/feedback.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <i
              className="fa-brands fa-youtube"
              style={{
                bottom: "135px",
                right: "100px",
                transform: "translate(-50%, -50%)",
                fontSize: "80px",
                color: "red",
                position: "relative",
              }}
            ></i>
          </div>
          <div className="col-md-8 center">
            <p className="text-align">
              <b>Contact Us</b>
              <br />
              1.4 million SBA loans are currently past due, delinquent, or in
              liquidation. Don&apos;t risk falling into financial trouble with
              your EIDL loan. If you&apos;re facing difficulties with repayment,
              contact us today for personalized assistance. We can help you
              explore options to manage your debt and avoid default. Don&apos;t
              wait—reach out now to secure your financial future and keep your
              business on track!
            </p>
          </div>
        </div>
      </div>
      <div className="parent_container">
        <img src="/images/design.png" alt="design" height="100px" />
      </div>
    </>
  );
}
