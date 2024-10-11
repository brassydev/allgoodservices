"use client";

export default function Card(props) {
  return (
    <>
      <div className="container-box">
        <div className="align-items-center d-flex justify-content-center">
          <img
            src={props.image}
            alt="services"
            width="100%"
            className=""
          ></img>
        </div>
        <h3 className="text-blue mt-3">
          <b>{props.title}</b>
        </h3>
        <p>{props.description}</p>
      </div>
    </>
  );
}
