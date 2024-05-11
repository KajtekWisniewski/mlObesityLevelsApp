import React from 'react';
import styles from './ResultStyles.module.scss'; // Adjust import path based on your project structure

const NormalWeight = () => {
  return (
    <div className={styles['resultComponent-4']}>
      <h1>Your result: Normal Weight</h1>
      <p>
        Description: Congratulations, your weight is in the normal standard. Continue
        your healthy way of living. Remember that the most important thing is for you to
        be both healthy and happy with your own body. Keep it up!
      </p>
    </div>
  );
};

export default NormalWeight;
