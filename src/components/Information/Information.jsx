import React from "react";
import styles from "./Information.module.css";
import Information_Girl from "../../../public/assets/information_girl.jpg";
import { FaFileAlt, FaPhoneSquareAlt } from "react-icons/fa";

const Information = () => {
  return (
    <>
      <div className="container">
        <div className={styles.information}>
          <div className={styles.texts}>
            <div className={`${styles.green_word} ${styles["h3"]}`}>
              <h3>CoffeeRaffa olaraq</h3>
            </div>
            <div className={styles["h3"]}>
              <h3>ilk öncə məqsədimiz </h3>
            </div>
            <div className={styles.paragraph}>
              <p>
                sizə təzə qovrulmuş qəhvə dənələrimizi təqdim etməkdir. Ola
                bilsin sizdə müasir qəhvə dəmləyən aparat və məşhur brendin
                qəhvəsi var. Amma, sizin istifadə etdiyiniz qəhvənin qovrulduğu
                tarix 1 ayı keçirsə, artıq siz əsl qəhvə dadından, tamından,
                qoxusundan məhrum olursunuz.
              </p>
            </div>
            <div className={styles.icons}>
              {/* <div className={styles.icon}>
                <FaFileAlt className={styles.svg} />
                <h6>Download price</h6>
              </div>
              <div className={styles.icon}>
                <FaPhoneSquareAlt className={styles.svg} />
                <h6>3-068-387-01-39</h6>
              </div> */}
            </div>
          </div>
          <div className={styles.images}>
            <div className={styles.heading_inner}>
              <h3>2024</h3>
            </div>
            <img src={Information_Girl} alt="girl" className="girl_image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
