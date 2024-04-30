import React, { useState } from 'react';
import styles from './WatchVideo.module.css';
import { MdPlayCircleOutline } from 'react-icons/md';

const WatchVideo = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.bg}>
      <div className={styles.black_bg}>
        <div className='container'>
          <div className={styles.video_container}>
            <h2>How we Prepare our Beans</h2>
            <h2>Watch Video</h2>
            <div className={styles.play_button} onClick={handleModalOpen}>
              <MdPlayCircleOutline />
            </div>
            {modalOpen && (
              <div className={styles.modal_bg} onClick={handleModalClose}>
                <div className={styles.modal_content}>
                  <span className={styles.close} onClick={handleModalClose}>
                    &times;
                  </span>
                  <div className={styles.video_wrapper}>
                    <iframe
                      className={styles.video}
                      src="https://www.youtube.com/embed/q6kO-d6fYHo?si=k4xaSGPl7DkMDsbL"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
