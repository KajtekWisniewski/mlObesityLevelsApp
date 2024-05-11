// OverweightLevelII.js
import React from 'react';
import styles from './ResultStyles.module.scss';

const OverweightLevelII = () => {
  return (
    <div className={styles['resultComponent-1']}>
      <h1>Your result: Overweight Level II</h1>
      <p>
        Description: You are classified as having Overweight Level II. This indicates a
        significantly higher than normal body weight, which can have negative effects on
        your health and well-being. It's important to take proactive steps to address
        your weight, such as consulting with a healthcare professional for guidance on
        lifestyle changes and weight management.
      </p>
    </div>
  );
};

export default OverweightLevelII;
