"use client";

import PageBanner from "@/components/PageBanner";
import { Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";

export default function Tax_Service() {
  const [activeTab, setActiveTab] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  // Data for each tab (titles and descriptions)
  const services = [
    "Understanding EIDL Loans and Default Consequences",
    "General Consequences of Defaulting on EIDL Loans",
    "Options to Overcome an EIDL Loan Crisis",
  ];

  // Content for each tab (can be extended with different content for each tab)
  const tabContents = [
    {
      title: "Understanding EIDL Loans and Default Consequences",
      paragraphs: [
        "The Economic Injury Disaster Loan (EIDL) program was introduced during the COVID-19 pandemic to support small businesses with non-repayable grants and loans. However, defaulting on an EIDL loan can have serious consequences, which vary depending on the amount borrowed:",
        "For loans up to $25,000: These are unsecured loans, meaning no assets are at risk. For loans between $25,000 and $200,000: The lender can seize business assets as collateral, and the impact on personal credit depends on whether the loan was taken using an EIN or Social Security number.For loans over $200,000: Business assets will be seized, and personal assets may also be at risk due to the personal guarantee required for these loans.",
      ],
      imageUrl: "/images/service/eidl/image1.jpg",
    },
    {
      title: "General Consequences of Defaulting on EIDL Loans",
      paragraphs: [
        "Defaulting on any EIDL loan can lead to severe consequences, regardless of the loan amount:Federal Payments Withheld: The U.S. Treasury Department can withhold tax refunds and a portion of Social Security payments to recover the debt.Ineligibility for Federal Programs: You may be disqualified from participating in future federal programs or receiving government benefits.Wage Garnishment: The U.S. Treasury Department can garnish up to 15% of your wages without needing a court order.",
        "Additionally, missing one or two payments does not immediately result in default. Default typically occurs after 3-4 months of missed payments or other factors, such as violating loan terms or filing for bankruptcy.",
      ],
      imageUrl: "/images/service/eidl/image2.jpg",
    },
    {
      title: "Options to Overcome an EIDL Loan Crisis",
      paragraphs: [
        "Offer in Compromise: This allows you to propose a lower repayment amount to settle your debt. The SBA may accept this offer if you’ve liquidated your collateral assets, aren't in bankruptcy, and can prove financial hardship.",
        "Filing for Bankruptcy: Bankruptcy can stop debt collection efforts temporarily, eliminate or discharge debts, and protect your assets. While it provides a fresh start, it's a complex process that should be approached with expert guidance.",
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
                  alt="eidl-service"
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
                    The Economic Injury Disaster Loan (EIDL) program was created
                    to help small businesses survive the financial impacts of
                    the COVID-19 pandemic.
                    <br />
                  </p>
                  <p className="mt-2 text-justify">
                    It offered both a $10,000 non-repayable advance grant and
                    low-interest loans, but defaulting on these loans can lead
                    to severe consequences depending on the loan amount.
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
                    alt="eidl-service"
                    height="180px"
                  />
                </Grid>
              </Grid>
              <h3 className="mt-4 text-red service-heading-text">
                Economic Injury Disaster Loan
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
                  The Economic Injury Disaster Loan (EIDL) program was created
                  to help small businesses survive the financial impacts of the
                  COVID-19 pandemic.
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check p-2"
                    style={{
                      fontSize: "25px",
                      color: "#00428c",
                    }}
                  ></i>
                  It offered both a $10,000 non-repayable advance grant and
                  low-interest loans, but defaulting on these loans can lead to
                  severe consequences depending on the loan amount.
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
