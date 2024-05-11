// ObesityTypeII.js
import React from 'react';
import styles from './ResultStyles.module.scss';

const ObesityTypeII = () => {
  return (
    <div className={styles['resultComponent-3']}>
      <h1>Your result: Obesity Type II</h1>
      <p>
        Description: You are classified as having Obesity Type II. This indicates a
        significantly higher than normal level of body fat, which can pose serious
        health risks. It's crucial to seek guidance from a healthcare professional to
        develop a plan for managing your weight and improving your health.
      </p>
    </div>
  );
};

export default ObesityTypeII;
