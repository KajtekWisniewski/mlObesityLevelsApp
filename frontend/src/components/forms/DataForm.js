import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './DataFormStyles.module.scss';
import SliderWithLabel from '../inputs/SliderWithLabel';

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
          <Form className={styles.formikForm}>
            <SliderWithLabel name="age" label="Age" min="1" max="99" />

            <label>Gender</label>
            <Field name="gender" as="select">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Field>
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

            <label>Consumption of alcohol at a party (CALC)</label>
            <Field name="CALC" as="select">
              <option value="">Select Option</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Frequently">Frequently</option>
              <option value="no">No</option>
            </Field>
            <ErrorMessage name="CALC" component="div" />

            <label>Consumption of food between meals (FAVC)</label>
            <Field name="FAVC" as="select">
              <option value="">Select Option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Field>
            <ErrorMessage name="FAVC" component="div" />

            <SliderWithLabel
              name="FCVC"
              label="Consumption of vegetables"
              min="1"
              max="3"
            />

            <SliderWithLabel name="NCP" label="Number of main meals" min="1" max="4" />

            <label>Calories consumption monitoring (SCC)</label>
            <Field name="SCC" as="select">
              <option value="">Select Option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Field>
            <ErrorMessage name="SCC" component="div" />

            <label>Smoking (SMOKE)</label>
            <Field name="SMOKE" as="select">
              <option value="">Select Option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Field>
            <ErrorMessage name="SMOKE" component="div" />

            <SliderWithLabel
              name="CH2O"
              label="Water consumption in liters"
              min="1"
              max="3"
            />

            <label>Family history of overweight</label>
            <Field name="family_history_with_overweight" as="select">
              <option value="">Select Option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Field>
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

            <label>Food between meals (CAEC)</label>
            <Field name="CAEC" as="select">
              <option value="">Select Option</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Always">Always</option>
              <option value="Frequently">Frequently</option>
              <option value="no">No</option>
            </Field>
            <ErrorMessage name="CAEC" component="div" />

            <label>Main transportation mode (MTRANS)</label>
            <Field name="MTRANS" as="select">
              <option value="">Select Option</option>
              <option value="Walking">Walking</option>
              <option value="Automobile">Automobile</option>
              <option value="Public_Transportation">Public Transportation</option>
              <option value="Bike">Bike</option>
              <option value="Motorbike">Motorbike</option>
            </Field>
            <ErrorMessage name="MTRANS" component="div" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
