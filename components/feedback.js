export default function Feedback() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <video autoplay width="300" height="340" muted loop>
              <source src="/images/feedback.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="col-md-8 align-items-center d-flex justify-content-center center">
            <p class="text-align">
              <b>Contact Us</b>
              <br></br>
              1.4 million SBA loans are currently past due, delinquent, or in
              liquidation. Don't risk falling into financial trouble with your
              EIDL loan. If you're facing difficulties with repayment, contact
              us today for personalized assistance. We can help you explore
              options to manage your debt and avoid default. Don't wait—reach
              out now to secure your financial future and keep your business on
              track!
            </p>
            <div class="parent-container">
              <img src="/images/design.png" alt="design" height="100px"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
