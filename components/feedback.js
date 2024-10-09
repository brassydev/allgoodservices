"use client";

export default function Feedback() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 m-0">
            <video autoPlay width="300" height="340" muted loop>
              <source src="/images/feedback.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-md-8 align-items-center d-flex justify-content-center center">
            <p className="text-align">
              <b>Contact Us</b>
              <br />
              1.4 million SBA loans are currently past due, delinquent, or in
              liquidation. Don&apos;t risk falling into financial trouble with your
              EIDL loan. If you&apos;re facing difficulties with repayment, contact
              us today for personalized assistance. We can help you explore
              options to manage your debt and avoid default. Don&apos;t wait—reach
              out now to secure your financial future and keep your business on
              track!
            </p>
            <div className="parent-container">
              <img src="/images/design.png" alt="design" height="100px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}