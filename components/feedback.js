export default function Feedback() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <video width="300" height="340" controls>
              <source src="/images/feedback.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="col-md-8">
            <h6>Contact us</h6>
            <p>
              1.4 million SBA loans are currently past due, delinquent, or in
              liquidation. Don't risk falling into financial trouble with your
              EIDL loan. If you're facing difficulties with repayment, contact
              us today for personalized assistance. We can help you explore
              options to manage your debt and avoid default. Don't wait—reach
              out now to secure your financial future and keep your business on
              track!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
