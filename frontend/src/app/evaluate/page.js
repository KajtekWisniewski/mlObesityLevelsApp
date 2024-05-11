'use client';

import axios from 'axios';
import { useState } from 'react';
import DataForm from '../../components/forms/DataForm';

export default function Evaluate() {
  const [response, setResponse] = useState(null);

  const [formValues, setFormValues] = useState({
    age: 20,
    gender: 'Male',
    height: 1.75,
    weight: 60,
    CALC: 'Sometimes',
    FAVC: 'yes',
    FCVC: 1,
    NCP: 1,
    SCC: 'no',
    SMOKE: 'no',
    CH2O: 1,
    family_history_with_overweight: 'no',
    FAF: 0,
    TUE: 0,
    CAEC: 'Sometimes',
    MTRANS: 'Walking'
  });

  const handleClick = async (submittedValues) => {
    setFormValues(submittedValues);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/result`,
        formValues
      );
      //console.log('submitted successfuly:', response.data);
      setResponse(response.data);
    } catch (error) {
      console.error('Error adding player:', error);
    }
    //console.log('Form submitted:', formValues);
  };

  return (
    <div className="">
      <DataForm initialValues={formValues} onSubmit={handleClick}></DataForm>
      {response !== null ? <div>your obesity level: {response}</div> : <div></div>}
    </div>
  );
}
