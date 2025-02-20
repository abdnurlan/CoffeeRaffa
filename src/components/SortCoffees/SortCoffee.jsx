import React from "react";
import styles from "./SortCoffee.module.css";

const SortCoffee = () => {
  return (
    <>
      <div className={styles.background}>
        <div className="container">
          <div className={styles.information}>
            <div className={styles.information_text}>
              <p>
                Dünya qəhvə ekspertlərinin rəyinə əsasən, ən yaxşı qəhvə
                qovrulduğu andan{" "}
                <span style={{ color: "#4d8b55" }}>7-21 gün</span> aralığında
                içilən qəhvədir.
              </p>
            </div>
            <div className={styles.coffee_sorts}>
              <div className={styles.coffee_sort}>
                <div
                  className={styles.coffee_image}
                  style={{
                    backgroundImage: `url("/assets/colombia.webp")`,
                    backgroundPosition: "50%",
                  }}
                ></div>
                <div className={styles.coffee_number}>01</div>
                <div className={styles.coffee_sort_name}>
                  <h4>Kolumbiya</h4>
                </div>
                <div className={styles.coffee_sort_info}>
                  <p>
                    Kolumbiya qəhvələri hamar, yaxşı balanslaşdırılmış ləzzət
                    profili ilə tanınır və dünya üzrə qəhvə həvəskarları
                    arasında sevilir.
                  </p>
                </div>
              </div>
              <div className={styles.coffee_sort}>
                <div
                  className={styles.coffee_image}
                  style={{
                    backgroundImage: `url("/assets/kenia.jpg")`,
                    backgroundPosition: "50%",
                  }}
                ></div>
                <div className={styles.coffee_number}>02</div>
                <div className={styles.coffee_sort_name}>
                  <h4>Keniya</h4>
                </div>
                <div className={styles.coffee_sort_info}>
                  <p>
                    Keniya mənşəli bu AA qəhvəsi, yüksək keyfiyyəti və canlı
                    turşuluğu ilə tanınan zəngin bir dad təcrübəsi təqdim edir.
                  </p>
                </div>
              </div>
              <div className={styles.coffee_sort}>
                <div
                  className={styles.coffee_image}
                  style={{
                    backgroundImage: `url("/assets/ethiopia.jpg")`,
                    backgroundPosition: "50%",
                  }}
                ></div>
                <div className={styles.coffee_number}>03</div>
                <div className={styles.coffee_sort_name}>
                  <h4>Efiopiya</h4>
                </div>
                <div className={styles.coffee_sort_info}>
                  <p>
                    Efiopiyanın Sidamo bölgəsindən olan bu qəhvə, çiçək notları
                    və incə meyvə dadları ilə fərqlənir.
                  </p>
                </div>
              </div>
              <div className={styles.coffee_sort}>
                <div
                  className={styles.coffee_image}
                  style={{
                    backgroundImage: `url("/assets/guatemalan.webp")`,
                    backgroundPosition: "50%",
                  }}
                ></div>
                <div className={styles.coffee_number}>04</div>
                <div className={styles.coffee_sort_name}>
                  <h4>Qvatemala</h4>
                </div>
                <div className={styles.coffee_sort_info}>
                  <p>
                    Qvatemala mənşəli Arabica 100% qəhvəsi, orta qovurulmuş
                    zəngin və balanslı dad təqdim edir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortCoffee;
