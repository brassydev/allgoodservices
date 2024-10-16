"use client";

import PageBanner from "@/components/PageBanner";
import { Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";

export default function Tax_Service() {
  const [activeTab, setActiveTab] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  // Data for each tab (titles and descriptions)
  const services = [
    "Tax Services for Individuals and Businesses",
    "Expertise and Commitment to Compliance",
    "Year-Round Support and Personalized Planning",
  ];

  // Content for each tab (can be extended with different content for each tab)
  const tabContents = [
    {
      title: "Tax Services for Individuals and Businesses.",
      paragraphs: [
        "At All Good Services, we offer a wide range of tax services to meet the needs of both individuals and businesses. Our offerings include individual tax preparation, business tax returns, audit support, and consulting services.",
        "Our team of Certified Public Accountants (CPAs) has over 7 years of collective experience, ensuring that every client receives expert care tailored to their unique tax situation.",
      ],
      imageUrl: "/images/service/tax_service/image1.jpg",
    },
    {
      title: "Expertise and Commitment to Compliance",
      paragraphs: [
        "Our team provides accurate and up-to-date tax solutions that ensure compliance with evolving tax regulations.",
        "We assist both individuals and businesses in maintaining tax compliance, reducing the risk of audits or penalties.",
      ],
      imageUrl: "/images/service/tax_service/image3.jpg",
    },
    {
      title: "Year-Round Support and Personalized Planning",
      paragraphs: [
        "We offer ongoing support throughout the year, helping you plan for the next tax season.",
        "Our experts provide personalized tax planning services to ensure you maximize tax benefits and minimize liabilities.",
      ],
      imageUrl: "/images/service/tax_service/image4.jpg",
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
        title={"Tax Services"}
        imageUrl={"/images/service/tax_service/tax_banner.jpg"}
      />
      <div style={{ paddingLeft: "5%" }}>
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
            <div className="container main-content p-3">
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
                    Ensuring you&apos;re well-prepared for future tax seasons
                    and helping you navigate any changes in tax laws. <br />
                  </p>
                  <p className="mt-2 text-justify">
                    From small business owners to individuals with complex tax
                    scenarios, we provide peace of mind and accurate results.
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
                    src="/images/service/tax_service/image2.jpg"
                    alt="tax-service"
                    height="180px"
                  />
                </Grid>
              </Grid>
              <h3 className="mt-4 text-red service-heading-text">
                Expert Tax Solutions for Individuals & Businesses
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
                  From personal tax preparation to business returns, audit
                  support and consulting
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check p-2"
                    style={{
                      fontSize: "25px",
                      color: "#00428c",
                    }}
                  ></i>
                  Experienced Team with over 7 years of CPA expertise
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
