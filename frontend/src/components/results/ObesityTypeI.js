// ObesityTypeI.js
import React from 'react';
import styles from './ResultStyles.module.scss';

const ObesityTypeI = () => {
  return (
    <div className={styles['resultComponent-3']}>
      <h1>Your result: Obesity Type I</h1>
      <p>
        Description: You are classified as having Obesity Type I. This indicates a
        higher than normal level of body fat. It's important to take steps to improve
        your health, such as adopting a balanced diet and increasing physical activity.
        Consulting with a healthcare professional is recommended for personalized
        guidance.
      </p>
    </div>
  );
};

export default ObesityTypeI;
