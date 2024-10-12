"use client";

import { TextField } from "@mui/material";

export default function Contact_form() {
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
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="firstName"
                required
              />
              <TextField
                label="E-mail"
                variant="outlined"
                fullWidth
                margin="normal"
                name="email"
                required
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                margin="normal"
                name="message"
                required
                multiline
                rows={4}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
