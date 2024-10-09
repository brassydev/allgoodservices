"use client";

export default function Card(props) {
  return (
    <>
      <div className="container-box">
        <div className="align-items-center d-flex justify-content-center">
          <img
            src={props.image}
            alt="services"
            height="200px"
            className="image-position"
          ></img>
        </div>
        <h6 className="text-blue mt-5">
          <b>{props.title}</b>
        </h6>
        <p>{props.description}</p>
      </div>
    </>
  );
}
