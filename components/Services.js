"use client";

import Card from "./Service_Card";

export default function Services() {
  return (
    <>
      <div className="container">
        <h1 className="heading-text text-blue my-5">
          Services <span className="text-dark">We Provide</span>
        </h1>
        <div className="row align-items-center d-flex justify-content-center">
          <div className="col">
            <Card
              image="/images/service/tax_service.jpg"
              title="TAX SERVICES"
              description="Maximize your returns and minimize your liabilities with our expert tax planning and preparation services."
            />
          </div>
          <div className="col">
            <Card
              image="/images/service/insurance.jpg"
              title="INSURANCE"
              description="Protect your assets and secure your future with tailored insurance solutions designed for your business."
            />
          </div>
          <div className="col">
            <Card
              image="/images/service/eidl.jpg"
              title="EIDL Solutions"
              description="We offer personalized strategies to help you stay on track and avoid default."
            />
          </div>
        </div>
      </div>
    </>
  );
}
