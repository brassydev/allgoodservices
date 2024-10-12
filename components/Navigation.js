"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import the hook

export default function Navigation() {
  const pathname = usePathname(); // Get the current pathname

  // Function to check if the link is active, handling both "/" and empty path
  const isActive = (path) => pathname === path || (pathname === "/" && path === "");

  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container nav-head">
        <Link className="navbar-brand" href="/">
          <img
            src="/images/logo.png"
            alt="all good financial services"
            height="60px"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className={`nav-link text-dark px-4 ${isActive("/") || isActive("") ? "active-menu" : ""}`}
                href="/"
              >
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-dark px-4 ${isActive("/about") ? "active-menu" : ""}`}
                href="/about"
              >
                <b>About</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-dark px-4 ${isActive("/services") ? "active-menu" : ""}`}
                href="/services"
              >
                <b>Services</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-dark px-4 ${isActive("/contact") ? "active-menu" : ""}`}
                href="/contact"
              >
                <b>Contact</b>
              </Link>
            </li>
          </ul>
          <div>
            <i className="fa-solid fa-phone"
                style={{
                  fontSize: "32px",
                }}></i>
          </div>
          <span
            style={{
              borderLeft: "1px solid black", // Creates the vertical line
              height: "38px", // Adjust height to match icon size
              marginLeft: "10px", // Adds spacing between icon and line
              marginRight:"10px"
            }}
          ></span>
          <div style={{ flexDirection: "column", textAlign: "center", marginRight: "1rem" }}>
            <p style={{ margin: 0, textDecorationLine: "underline" }}>Have any Question?</p>
            <p style={{ margin: 0 }}>682-376-8733</p>
          </div>
          <Link href="/health-insurance">
          <button className="btn btn-primary bg-blue border-0 font-weight-600" type="button">
             Apply Today
           
          </button></Link>
        </div>
      </div>
    </nav>
  );
}
