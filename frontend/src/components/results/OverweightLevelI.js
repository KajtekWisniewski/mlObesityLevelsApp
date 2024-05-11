// OverweightLevelI.js
import React from 'react';
import styles from './ResultStyles.module.scss';

const OverweightLevelI = () => {
  return (
    <div className={styles['resultComponent-1']}>
      <h1>Your result: Overweight Level I</h1>
      <p>
        Description: You are classified as having Overweight Level I. This indicates a
        higher than normal body weight, which can increase the risk of certain health
        conditions. It's advisable to make lifestyle changes, such as adopting a
        healthier diet and increasing physical activity, to improve your health.
      </p>
    </div>
  );
};

export default OverweightLevelI;
