import React from 'react';
import { useField } from 'formik';

export default function SliderWithLabel({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="range" {...field} {...props} />
      <span> {field.value}</span>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
}
