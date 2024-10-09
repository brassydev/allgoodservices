export default function Card(props) {
  return (
    <>
      <div class="container-box">
        <div class="align-items-center d-flex justify-content-center">
          <img
            src={props.image}
            alt="services"
            height="200px"
            class="image-position"
          ></img>
        </div>
        <h6 class="text-blue mt-5">
          <b>{props.title}</b>
        </h6>
        <p>{props.description}</p>
      </div>
    </>
  );
}
