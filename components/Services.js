"use client";

import { useEffect, useState } from "react";
import Card from "./Service_Card";
import Link from "next/link";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  // This hook will add the animation once the component is mounted
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay the animation to trigger after mounting
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="heading-text text-blue mt-5">
          Services <span className="text-dark">We Provide</span>
        </h1>
        <div className="row align-items-center d-flex justify-content-center">
          <div className="col">
            <div className={isVisible ? "card-animate" : ""}>
              <Link
                href="/services/tax-service"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card
                  image="/images/service/tax_service.jpg"
                  title="TAX SERVICES"
                  description="Maximize your returns and minimize your liabilities with our expert tax planning and preparation services."
                />
              </Link>
            </div>
          </div>
          <div className="col">
            <div className={isVisible ? "card-animate" : ""}>
              <Link
                href="/services/insurance"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card
                  image="/images/service/insurance.jpg"
                  title="INSURANCE"
                  description="Protect your assets and secure your future with tailored insurance solutions designed for your business."
                />
              </Link>
            </div>
          </div>
          <div className="col">
            <div className={isVisible ? "card-animate" : ""}>
              <Link
                href="/services/eidl-solutions"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card
                  image="/images/service/eidl.jpg"
                  title="EIDL Solutions"
                  description="We offer personalized strategies to help you stay on track and avoid default."
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
