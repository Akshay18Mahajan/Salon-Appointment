// import carousel1 from "../images/carousal_1.png";
// import carousel2 from "../images/carousal_1.png";
// import carousel3 from "../images/carousal_1.png";

import hero1 from "../images/hero1.webp";
import hero2 from "../images/hero2.jpg";
import hero3 from "../images/hero3.jpg";




const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      {/* <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carousel3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carousel3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carousel3} className="d-block w-100" alt="..." />
        </div>   
      </div> */}

      <div className="carousel-inner">
  <div className="carousel-item active">
    <img
  src={hero1}
  className="d-block w-100"
  style={{ height: "500px", objectFit: "cover" }}
  alt="Salon"
/>

  </div>

  <div className="carousel-item">
   <img
  src={hero2}
  className="d-block w-100"
  style={{ height: "500px", objectFit: "cover" }}
  alt="Salon"
/>

  </div>

  <div className="carousel-item">
    <img src={hero3} className="d-block w-100" alt="Salon 3" />
  </div>
</div>


      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
