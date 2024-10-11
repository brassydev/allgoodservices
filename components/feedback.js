"use client";

export default function Feedback() {
  return (
    <div className="">
      <div className="container p-5">
        <div className="row p-5">
          <div className="col-md-4">
            <div className="position-relative ">
              <video
                className="video_container center"
                autoPlay
                muted
                loop
                width={'100%'}
              >
                <source src="/images/feedback.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <i
                className="fa-brands fa-youtube"
                style={{
                  top: '50%',
                  left: '50%',
                transform: "translate(-50%, -50%)",
                fontSize: "80px",
                color: "red",
                position: "absolute",
              }}
              ></i>
              <span className="bg-blue quotes">“Many businesses are struggling with
              their SBA loans, but you don&apos;t have to
              be one of them. If you&apos;re finding it hard
              to repay your EIDL loan, reach out for
              support now before it&apos;s too late”</span>
              <span className="quotes-author">-Tom Watson,CEO of Technologies</span>
            </div>
          </div>
          <div className="col-md-8 center">
            <h1 className="heading-text text-blue">Struggling with
            SBA loan?</h1>
            <p className="text-align">
              <b>Contact Us</b>
              <br /> <br />
              1.4 million SBA loans are currently past due, delinquent, or in
              liquidation. Don&apos;t risk falling into financial trouble with
              your EIDL loan. If you&apos;re facing difficulties with repayment,
              contact us today for personalized assistance. We can help you
              explore options to manage your debt and avoid default. Don&apos;t
              wait—reach out now to secure your financial future and keep your
              business on track!
            </p>
            <span  className="text-align">We understand 
              how stressful it can be to manage repayment obligations, especially in uncertain times. 
              By contacting us, you&apos;ll receive a tailored plan to help restructure your loan, reduce 
              your payment burden, and protect your credit. Don&apos;t let 
              financial worries hold you back—get in touch with us today!
            </span>
          </div>
        </div>
      </div>
      {/* <div className="">
              <img src="/images/design.png" alt="design" height="100px" />
            </div> */}
    </div>
  );
}
