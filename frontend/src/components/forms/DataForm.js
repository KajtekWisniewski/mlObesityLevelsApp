import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './DataFormStyles.module.scss';
import SliderWithLabel from '../inputs/SliderWithLabel';
import SelectWithLabel from '../inputs/SelectWithLabel';

const FormSchema = Yup.object().shape({
  age: Yup.number().min(1).max(99).required('Required'),
  gender: Yup.string().oneOf(['Male', 'Female'], 'Invalid gender').required('Required'),
  height: Yup.number().min(0.5).max(2.5).required('Required'),
  weight: Yup.number().min(30).max(1000).required('Required'),
  CALC: Yup.string()
    .oneOf(['Sometimes', 'Frequently', 'no'], 'Invalid choice')
    .required('Required'),
  FAVC: Yup.string().oneOf(['yes', 'no'], 'Invalid choice').required('Required'),
  FCVC: Yup.number().min(1).max(3).required('Required'),
  NCP: Yup.number().min(1).max(4).required('Required'),
  SCC: Yup.string().oneOf(['yes', 'no'], 'Invalid choice').required('Required'),
  SMOKE: Yup.string().oneOf(['yes', 'no'], 'Invalid choice').required('Required'),
  CH2O: Yup.number().min(1).max(3).required('Required'),
  family_history_with_overweight: Yup.string()
    .oneOf(['yes', 'no'], 'Invalid choice')
    .required('Required'),
  FAF: Yup.number().min(0).max(3).required('Required'),
  TUE: Yup.number().min(0).max(2).required('Required'),
  CAEC: Yup.string()
    .oneOf(['Sometimes', 'Always', 'Frequently', 'no'], 'Invalid choice')
    .required('Required'),
  MTRANS: Yup.string()
    .oneOf(
      ['Walking', 'Automobile', 'Public_Transportation', 'Bike', 'Motorbike'],
      'Invalid choice'
    )
    .required('Required')
});

const MyForm = ({ initialValues, onSubmit }) => {
  return (
    <div className="test">
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <div className={styles.former}>
            <Form className={styles.formikForm}>
              <SliderWithLabel name="age" label="Age" min="1" max="99" />

              <SelectWithLabel
                name="gender"
                label="Gender"
                options={[
                  { value: 'Male', label: 'Male' },
                  { value: 'Female', label: 'Female' }
                ]}
              />
              <ErrorMessage name="gender" component="div" />
              <ErrorMessage name="gender" component="div" />

              <SliderWithLabel
                name="height"
                label="Height (meters)"
                min="0.50"
                max="2.50"
                step="0.01"
              />

              <SliderWithLabel
                name="weight"
                label="Weight (kg)"
                min="30"
                max="1000"
                step="1"
              />

              <SelectWithLabel
                name="CALC"
                label="Consumption of alcohol at a party (CALC)"
                options={[
                  { value: 'Sometimes', label: 'Sometimes' },
                  { value: 'Frequently', label: 'Frequently' },
                  { value: 'no', label: 'No' }
                ]}
              />
              <ErrorMessage name="CALC" component="div" />

              <SelectWithLabel
                name="FAVC"
                label="Consumption of food between meals (FAVC)"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ]}
              />
              <ErrorMessage name="FAVC" component="div" />

              <SliderWithLabel
                name="FCVC"
                label="Consumption of vegetables"
                min="1"
                max="3"
              />

              <SliderWithLabel
                name="NCP"
                label="Number of main meals"
                min="1"
                max="4"
              />

              <SelectWithLabel
                name="SCC"
                label="Calories consumption monitoring (SCC)"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ]}
              />
              <ErrorMessage name="SCC" component="div" />

              <SelectWithLabel
                name="SMOKE"
                label="Smoking (SMOKE)"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ]}
              />
              <ErrorMessage name="SMOKE" component="div" />

              <SliderWithLabel
                name="CH2O"
                label="Water consumption in liters"
                min="1"
                max="3"
              />

              <SelectWithLabel
                name="family_history_with_overweight"
                label="Family history of overweight"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ]}
              />
              <ErrorMessage name="family_history_with_overweight" component="div" />

              <SliderWithLabel
                name="FAF"
                label="Physical activity frequency (times a day)"
                min="0"
                max="3"
              />

              <SliderWithLabel
                name="TUE"
                label="Time using technology devices (hours a day)"
                min="0"
                max="2"
              />

              <SelectWithLabel
                name="CAEC"
                label="Food between meals (CAEC)"
                options={[
                  { value: 'Sometimes', label: 'Sometimes' },
                  { value: 'Always', label: 'Always' },
                  { value: 'Frequently', label: 'Frequently' },
                  { value: 'no', label: 'No' }
                ]}
              />
              <ErrorMessage name="CAEC" component="div" />

              <SelectWithLabel
                name="MTRANS"
                label="Main transportation mode (MTRANS)"
                options={[
                  { value: 'Walking', label: 'Walking' },
                  { value: 'Automobile', label: 'Automobile' },
                  { value: 'Public_Transportation', label: 'Public Transportation' },
                  { value: 'Bike', label: 'Bike' },
                  { value: 'Motorbike', label: 'Motorbike' }
                ]}
              />
              <ErrorMessage name="MTRANS" component="div" />

              <button type="submit">Submit</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
