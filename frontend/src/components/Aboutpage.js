import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import styles from "./Aboutpage.module.css";
const Aboutpage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.mainAbout}>
        <div className={styles.floating}>
          <Carousel />
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
          <Carousel />
        </div>

        <div className={styles.floating}>
          <Carousel />
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
          <Carousel />
        </div>
      </div>

      <button onClick={() => navigate("/urlAnalyser")}>Try Product</button>
    </div>
  );
};

export default Aboutpage;
