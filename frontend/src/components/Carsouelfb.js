import React from "react";
import styles from "./Carousel.module.css";

const Carouselfb = ({ id }) => {
  return (
    <div>
      <div
        id={id}
        className={`carousel slide carousel-fade ${styles.carouselDiv}`}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://assets.vogue.in/photos/6285546f59172d938d5c0539/master/w_1600%2Cc_limit/235102446_944739809421401_350281382770719041_n.jpg"
              className={styles.ytbImages}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://whatmobileno.com/wp-content/uploads/2021/10/Khaby-Lame-1024x955.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://yt3.googleusercontent.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s900-c-k-c0x00ffffff-no-rj"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carouselfb;
