import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import styles from './DetailsComponent.module.css';

export default function DetailsComponent({
  component,
  details,
  setProjectDetails,
  setPaymentClick,
}) {
  const foundDetails = details.find((detail) => component.id === detail.id);

  const paymentHandler = () => {
    setPaymentClick(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrowBackWrapper}>
        <ArrowBackIcon onClick={() => setProjectDetails(null)} />
      </div>
      <div>
        <div className={styles.photoWrapper}>
          <img
            className={styles.projectPhoto}
            src={component.photo}
            alt="Фото проекту"
          />
        </div>
        <span className={styles.projectDescription}>
          {foundDetails.description}
        </span>
        <ul className={styles.stagesList}>
          {foundDetails.stages.map((stage) => (
            <li className={styles.stagesItem} key={stage.id}>
              <div className={styles.stagesNameWrapper}>
                <img
                  className={styles.stagesImg}
                  src={stage.photo}
                  alt="Фото етапу"
                />
                <span>{stage.name}</span>
              </div>
              <button className={styles.stagesBtn} onClick={paymentHandler}>
                Оплатити
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
