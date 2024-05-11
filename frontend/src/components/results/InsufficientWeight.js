// InsufficientWeight.js
import React from 'react';
import styles from './ResultStyles.module.scss';

const InsufficientWeight = () => {
  return (
    <div className={styles['resultComponent-1']}>
      <h1>Your result: Insufficient Weight</h1>
      <p>
        Description: Your weight is considered insufficient. It's important to maintain
        a healthy weight for your overall well-being. Consider consulting with a
        healthcare professional for guidance on achieving a healthy weight.
      </p>
    </div>
  );
};

export default InsufficientWeight;
