"use client";

import PageBanner from "@/components/PageBanner";
import { Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";

export default function Tax_Service() {
  const [activeTab, setActiveTab] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  // Data for each tab (titles and descriptions)
  const services = [
    "Understanding the Affordable Care Act (ACA)",
    "Privacy, Compliance, and Personalized Support",
    "Comprehensive Guidance and Ongoing Assistance",
  ];

  // Content for each tab (can be extended with different content for each tab)
  const tabContents = [
    {
      title: "Understanding the Affordable Care Act (ACA)",
      paragraphs: [
        "The Affordable Care Act (ACA), enacted in 2010, aims to increase healthcare access, improve quality, and reduce costs.Individuals can apply through licensed insurance agents. ",
        "It established health insurance marketplaces that provide essential health benefits and protect consumers from discrimination based on pre-existing conditions.",
      ],
      imageUrl: "/images/service/eidl/image1.jpg",
    },
    {
      title: "Privacy, Compliance, and Personalized Support",
      paragraphs: [
        "At All Good Services, we prioritize your privacy and strictly adhere to HIPAA and ACA regulations to protect your personal health information.",
        "Our dedicated team offers tailored support to help you navigate the complexities of ACA options and find the right plan for your needs.",
      ],
      imageUrl: "/images/service/eidl/image2.jpg",
    },
    {
      title: "Comprehensive Guidance and Ongoing Assistance",
      paragraphs: [
        "With expert knowledge of ACA regulations, we simplify the enrollment process, help you avoid common pitfalls, and ensure you meet all deadlines. ",
        "Our commitment doesn’t end with enrollment – we provide continuous support to answer questions and resolve issues, ensuring you fully benefit from your health plan.",
      ],
      imageUrl: "/images/service/eidl/image3.jpg",
    },
  ];

  // Handle scroll event to make the sidebar fixed when it reaches the top
  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector(".main-content");

      // Check if sidebar exists before accessing its properties
      if (sidebar) {
        const offsetTop = sidebar.offsetTop;
        const windowWidth = window.innerWidth;

        // Only make the sidebar fixed if the window width is greater than 900px
        if (windowWidth > 900) {
          if (window.scrollY > offsetTop - 48) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        } else {
          setIsFixed(false); // Reset to not fixed below 900px
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <PageBanner
        title={"EIDL Solutions"}
        imageUrl={"/images/service/eidl/banner.jpg"}
      />
      <div style={{paddingLeft:"5%",paddingRight:'5%'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sm={12}>
            {/* Sidebar with dynamic fixed effect */}
            <div className={`sidebar ${isFixed ? "fixed-sidebar" : ""}`}>
              <div className="contact_form_container mt-5">
                <div className="container">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`service-button text-white d-flex align-items-center mt-3 ${
                        activeTab === index ? "active-tab" : "inactive-tab"
                      }`}
                      onClick={() => setActiveTab(index)}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <i
                        className="fa-solid fa-arrow-right p-3"
                        style={{
                          fontSize: "18px",
                          color: "white",
                        }}
                      ></i>
                      <h6>{service}</h6>
                    </div>
                  ))}
                </div>
              </div>
              <div className="service-detail-container my-5 bg-blue text-white">
                <h4>Need Service?</h4>
                <h2 className="">682-376-3299</h2>
                <h6 className="">info@allgoodservices.net</h6>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={8} sm={12}>
            {/* Dynamic content based on the active tab */}
            <div className="container main-content m-5">
              <div style={{ textAlign: "center" }}>
                <img
                  src={tabContents[activeTab].imageUrl}
                  alt="tax-service"
                  height="250px"
                />
              </div>
              <h3 className="mt-4 text-red service-heading-text">
                {tabContents[activeTab].title}
              </h3>
              {tabContents[activeTab].paragraphs.map((paragraph, idx) => (
                <p className="mt-3 text-justify" key={idx}>
                  {paragraph}
                </p>
              ))}
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={12}>
                  <p className="mt-4 text-justify">
                    At All Good Services, we provide comprehensive insurance
                    solutions designed to protect your assets, whether you&apos;re an
                    individual or a business.
                    <br />
                  </p>
                  <p className="mt-2 text-justify">
                    Ensuring you&apos;re well-prepared for future tax seasons and
                    helping you navigate any changes in tax laws.
                  </p>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sm={12}
                  container
                  alignItems="center" // Vertically center content
                  style={{ display: "flex" }} // Enable flexbox
                >
                  <img
                    src="/images/service/eidl/image4.jpg"
                    alt="tax-service"
                    height="180px"
                  />
                </Grid>
              </Grid>
              <h3 className="mt-4 text-red service-heading-text">
                Healthcare Solutions Tailored to Your Needs
              </h3>
              <ul className="list-unstyled">
                <li>
                  <i
                    className="fa-solid fa-circle-check p-2"
                    style={{
                      fontSize: "25px",
                      color: "#00428c",
                    }}
                  ></i>
                  From ACA-compliant health plans to personalized coverage
                  options, we guide you through the complexities of healthcare
                  policies, providing peace of mind with accurate and tailored
                  solutions.
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check p-2"
                    style={{
                      fontSize: "25px",
                      color: "#00428c",
                    }}
                  ></i>
                  With access to competitive healthcare plans, potential
                  subsidies, and personalized assistance, we help you secure the
                  right ACA coverage to protect your health and financial
                  well-being.
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
        </div>
      <style jsx>{`
        .active-tab {
          background-color: #00428c; /* Active tab background color */
        }

        .inactive-tab {
          background-color: #00428c;
          opacity: 0.65;
        }

        .sidebar {
          transition: all 0.3s ease;
        }

        .fixed-sidebar {
          position: fixed;
          top: 0;
          width: 29.3%; /* Adjust based on layout */
          z-index: 999;
        }
      `}</style>
      
    </>
  );
}
