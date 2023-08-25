import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import styles from "./Aboutpage.module.css";
import Navbar from "./Navbar";

const Aboutpage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className={styles.mainAbout}>
        <div className={styles.floating}>
          <Carousel id="carousel1" />
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            nesciunt labore odio corporis error eaque eligendi, modi harum
            voluptatibus eveniet.
          </h3>
        </div>

        <div className={styles.floating}>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            nesciunt labore odio corporis error eaque eligendi, modi harum
            voluptatibus eveniet.
          </h3>
          <Carousel id="carousel2" />
        </div>

        <div className={styles.floating}>
          <Carousel id="carousel3" />
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            nesciunt labore odio corporis error eaque eligendi, modi harum
            voluptatibus eveniet.
          </h3>
        </div>

        <div className={styles.floating}>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            nesciunt labore odio corporis error eaque eligendi, modi harum
            voluptatibus eveniet.
          </h3>
          <Carousel id="carousel4" />
        </div>
      </div>

      <button onClick={() => navigate("/urlAnalyser")}>Try Product</button>
    </div>
  );
};

export default Aboutpage;
