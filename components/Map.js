"use client";

export default function Map() {
  return (
    <>
      <div className="container-fluid">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.039017729712!2d151.09377907507644!3d-33.94012456350659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ba2bcb43bb1d%3A0x2366186faa7b695a!2s30%20Commercial%20Rd%2C%20Fratton%20NSW%202208%2C%20Australia!5e0!3m2!1sen!2sin!4v1728716607416!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
