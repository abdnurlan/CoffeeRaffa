import React, { useEffect, useState } from "react";
import styles from "./Superiority.module.css";
import Cup from "/assets/cup.jpg";
import Superiority_1 from "/assets/superiority_1.png";
import Superiority_2 from "/assets/superiority_2.png";
import Superiority_3 from "/assets/superiority_3.png";
import Superiority_4 from "/assets/superiority_4.png";
import Superiority_5 from "/assets/superiority_5.png";
import Superiority_6 from "/assets/superiority_6.png";

const Superiority = () => {
  const [showCup, setShowCup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(`.${styles.superior_container}`);
      const windowHeight = window.innerHeight;
      const rect = element.getBoundingClientRect();
      const offset = windowHeight - rect.top;
      if (offset > 0 && !showCup) {
        setShowCup(true);
        element.classList.add(styles.animate);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showCup]);

  return (
    <div className="container">
      <div className={styles.superior_container}>
        <div className={`${styles.first_part} ${styles.animate}`}>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={Superiority_1} alt="superiority" />
            </div>
            <div className={styles.item_info}>
              <h6 className={styles.item_h6}>Saf Növlər</h6>
              <p className={styles.item_text}>
                Qəhvə bitkisi subtropik bölgələrdə bitən və yüksək
                hündürlüklərdə daha keyfiyyətli olan bitkidir.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={Superiority_2} alt="superiority" />
            </div>
            <div className={styles.item_info}>
              <h6 className={styles.item_h6}>Geniş Çeşidlər</h6>
              <p className={styles.item_text}>
                Dünyada ən məşhur qəhvə növləri Arabica və Robustadır.{" "}
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={Superiority_3} alt="superiority" />
            </div>
            <div className={styles.item_info}>
              <h6 className={styles.item_h6}>Doğru Qovurma</h6>
              <p className={styles.item_text}>
                Qəhvə dənələri ətirini və dadını ortaya çıxarır Diqqətlə
                qızardın.
              </p>
            </div>
          </div>
        </div>
        <div
          className={styles.cup}
          style={{
            transform: showCup ? "scale(1)" : "scale(0)",
            transition: "transform 1s",
          }}
        >
          <img src={Cup} alt="coffee" />
        </div>
        <div className={`${styles.second_part} ${styles.animate}`}>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={Superiority_4} alt="superiority" />
            </div>
            <div className={styles.item_info}>
              <h6 className={styles.item_h6}>Yüksək Keyfiyyət</h6>
              <p className={styles.item_text}>
                Qəhvə sudan başqa dünyada ən çox istehlak edilən içkilərdən
                biridir.{" "}
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={Superiority_5} alt="superiority" />
            </div>
            <div className={styles.item_info}>
              <h6 className={styles.item_h6}>Mükəmməl Dəyirman</h6>
              <p className={styles.item_text}>
                Qəhvənin üyüdülmə dərəcəsi hazırlanma üsulundan və üsulundan
                asılı olaraq dəyişir bu dada təsir edir.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={Superiority_6} alt="superiority" />
            </div>
            <div className={styles.item_info}>
              <h6 className={styles.item_h6}>Möhtəşəm Aroma</h6>
              <p className={styles.item_text}>
                Qəhvənin unikal ətri onun tərkibindəki təbii yağlardan gəlir.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Superiority;
