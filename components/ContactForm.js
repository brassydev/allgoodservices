"use client";

import { Button, TextField } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact_form() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Thank you for your feedback!", {
          style: {
            border: "1px solid #4BB543",
            padding: "16px",
            color: "#4BB543",
          },
          iconTheme: {
            primary: "#4BB543",
            secondary: "#FFFAEE",
          },
        });
        // Reset form
        setFormData({
          firstName: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Error submitting feedback.", {
          style: {
            border: "1px solid #FF6347",
            padding: "16px",
            color: "#FF6347",
          },
          iconTheme: {
            primary: "#FF6347",
            secondary: "#FFFAEE",
          },
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h2>
              <span className="text-blue">Contact Us</span> Today
            </h2>
            <p className="mt-3">
              We’d love to hear from you! Whether you have questions about our
              services
            </p>
            <div className="d-flex align-items-center mt-4">
              <i
                className="fa-solid fa-message"
                style={{
                  fontSize: "32px",
                  color: "black",
                }}
              ></i>
              <h6 className="contact_container d-flex align-items-center px-3">
                eidl@allgoodservices.net
              </h6>
            </div>
            <div className="d-flex align-items-center mt-4">
              <i
                class="fa-brands fa-whatsapp"
                style={{
                  fontSize: "32px",
                  color: "#2fba42",
                }}
              ></i>
              <h6 className="contact_container d-flex align-items-center px-3">
                682-376-8733
              </h6>
            </div>
            <div className="d-flex align-items-center mt-4">
              <i
                className="fa-solid fa-phone"
                style={{
                  fontSize: "32px",
                  color: "black",
                }}
              ></i>
              <h6 className="contact_container d-flex align-items-center px-3">
                682-376-8733
              </h6>
            </div>
            <div className="contact_line my-5"></div>
          </div>
          <div className="col-md-6 mt-5 mb-5">
            <div className="contact_form_container">
              <h2>Send a message</h2>
              <p className="text-blue">Drop a line !</p>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  required
                />
                <Button variant="contained" type="submit" className="bg-blue">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
