import React, { useEffect, useState } from "react";
import styles from "./Superiority.module.css";

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
              <img src="/assets/superiority_1.png" alt="superiority" />
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
              <img src="/assets/superiority_2.png" alt="superiority" />
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
              <img src="/assets/superiority_3.png" alt="superiority" />
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
          <img src="/assets/cup.jpg" alt="coffee" />
        </div>
        <div className={`${styles.second_part} ${styles.animate}`}>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src="/assets/superiority_4.png" alt="superiority" />
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
              <img src="/assets/superiority_5.png" alt="superiority" />
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
              <img src="/assets/superiority_6.png" alt="superiority" />
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
