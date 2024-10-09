import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/banner";
import Card from "@/components/Card";
import Feedback from "@/components/feedback";
import Home_Banner from "@/components/home_banner";

export default function Home() {
  return (
    <>
    <Home_Banner/>
      <h1 class="text-blue m-5">
        Services <span class="text-dark">We Provide</span>
      </h1>
      <div class="container">  
      </div>
      <div class="row align-items-center d-flex justify-content-center">
        <div class="col">
          <Card
            image="/images/service/tax_service.jpg"
            title="TAX SERVICES"
            description="Maximize your returns and minimize your liabilities with our expert tax planning and preparation services."
          />
        </div>
        <div class="col">
          <Card
            image="/images/service/insurance.jpg"
            title="INSURANCE"
            description="Protect your assets and secure your future with tailored insurance solutions designed for your business."
          />
        </div>
        <div class="col">
          <Card
            image="/images/service/eidl.jpg"
            title="EIDL Solutions"
            description="We offer personalized strategies to help you stay on track and avoid default."
          />
        </div>
      </div>
      <Feedback/>
      <Banner />
    </>
  );
}
