"use client";
import Home_Banner from "@/components/home_banner";
import styles from "./page.module.css";

import Services from "@/components/Services";
import Feedback from "@/components/feedback";
import AboutUs from "@/components/About_Us";
import Banner from "@/components/banner";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
    <Home_Banner/>
    <Services/>
    <Feedback/>
    <AboutUs/> 
    <Contact/>
    <Banner/>    
    </>
  );
}
