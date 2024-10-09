"use client";

export default function AboutUs() {
  return (
    <>
      <div className="container">
        <h1>About our organization</h1>
        <p>
          Introduce your company here. You can discuss your company&apos;s
          background, history, mission, vision, or philosophy - anything that
          will introduce your brand&apos;s persona to your audience. This will help
          build a connection between you and them.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6 my-5 bg-blue text-white pt-4">
          <h2 className="center">Our mission and vision</h2>
          <p className="text-spacing">
            We will be on your side, educating you to understand your financial
            needs, the best options available and help achieving your goals Our
            vision is to be the team you can count on to bring you sound advice
            during the ups and downs in life so that your tomorrow will be
            brighter
          </p>
        </div>
        <div className="col-md-6 my-5 pt-4">
          <h2 className="center">Our work so far</h2>
          <p className="text-spacing">
            Crucial to establishing credibility and trust is a good track
            record. Talk about your journey so far and the work you&apos;ve
            accomplished. How much of your mission and vision have come to
            fruition? What obstacles have you hurdled, and what wins have you
            celebrated? Your story can inspire others to join you in achieving
            your goals faster.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 center p-5">
            <p className="text-align">
              <b>Comprehensive Financial Solutions</b>
              <br></br>
              At AllGood Finance Services, we are dedicated to empowering
              businesses and individuals to achieve financial stability and
              success. With a deep understanding of the financial challenges
              faced by businesses today, our organization provides expert
              services tailored to your needs. We offer a wide range of
              financial services, including SBA and EIDL loan assistance, debt
              management, and personalized financial strategies. Whether you
              need help with repayment or navigating complex loan processes,
              we&apos;ve got you covered.
            </p>
          </div>
          <div className="col-md-6 center">
            <img
              src="/images/finance_banner.png"
              height="500"
              alt="banner"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
