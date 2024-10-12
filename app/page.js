"use client";
import styles from "./page.module.css";

import Services from "@/components/Services";
import Feedback from "@/components/feedback";
import AboutUs from "@/components/About_Us";
import Home_Banner from "@/components/Home_Banner";
import Banner from "@/components/Banner";
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
