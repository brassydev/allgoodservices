"use client";

export default function AboutUs() {
  return (
    <>
      <div className="container">
        <h1 className="heading-text mb-3">About our organization</h1>
        <p style={{maxWidth:'1000px'}}>
          Introduce your company here. You can discuss your company&apos;s
          background, history, mission, vision, or philosophy - anything that
          will introduce your brand&apos;s persona to your audience. This will help
          build a connection between you and them.
        </p>
      </div>
      <div className="row">
        <div style={{textAlign:'center'}} className="col-md-6 my-5 bg-blue text-white p-5">
          <i className="fas fa-bullseye fa-3x me-3"></i> {/* Icon */}
          <h2 className="font-weight-700 pt-3">Our mission and vision</h2>
          <p className="text-spacing">
            We will be on your side, educating you to understand your financial
            needs, the best options available and help achieving your goals. Our
            vision is to be the team you can count on to bring you sound advice
            during the ups and downs in life so that your tomorrow will be
            brighter.
          </p>
        </div>
        <div style={{textAlign:'center'}} className="col-md-6 my-5 p-5">
         
            <i className="fas fa-briefcase fa-3x me-3"></i> {/* Icon */}
            <h2 className="font-weight-700 pt-3">Our work so far</h2>
        
          <p className="text-spacing">
            Crucial to establishing credibility and trust is a good track
            record. Talk about your journey so far and the work you&apos;ve
            accomplished. How much of your mission and vision have come to
            fruition? What obstacles have you hurdled, and what wins have you
            celebrated? Your story can inspire others to join you in achieving
            your goals faster.
          </p>
        </div>
       
      </div>
      <div className="container">
          <div className="row">
            <div className="col-md-6 center">
              <div className="d-flex-column align-items-center">
                <i className="fas fa-handshake fa-3x me-3"></i> {/* Icon */}
                <h2 style={{fontWeight:'bold'}}>Comprehensive Financial Solutions</h2>
                <p className="text-align">
                
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
            </div>
            <div className="col-md-6 center">
              <img
                src="/images/finance_banner.png"
                alt="banner"
                width={'100%'}
              ></img>
            </div>
          </div>
        </div>
    </>
  );
}
