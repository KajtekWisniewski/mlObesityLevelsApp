import React, { useState, useEffect } from 'react';
import ObesityTypeI from './ObesityTypeI';
import Normal_Weight from './NormalWeight';
import { ClockLoader } from 'react-spinners';
import InsufficientWeight from './InsufficientWeight';
import ObesityTypeII from './ObesityTypeII';
import ObesityTypeIII from './ObesityTypeIII';
import OverweightLevelI from './OverweightLevelI';
import OverweightLevelII from './OverweightLevelII';

const ResultComponent = ({ resultFromApi }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API request delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ClockLoader />;
  }

  switch (resultFromApi) {
    case 'Obesity_Type_I':
      return <ObesityTypeI />;
    case 'Obesity_Type_II':
      return <ObesityTypeII />;
    case 'Obesity_Type_III':
      return <ObesityTypeIII />;
    case 'Normal_Weight':
      return <Normal_Weight />;
    case 'Insufficient_Weight':
      return <InsufficientWeight />;
    case 'Overweight_Level_I':
      return <OverweightLevelI />;
    case 'Overweight_Level_II':
      return <OverweightLevelII />;
    default:
      return <div>No matching component found for the result</div>;
  }
};

export default ResultComponent;
