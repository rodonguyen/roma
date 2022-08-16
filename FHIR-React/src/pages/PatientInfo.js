import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-balham.css';
import '../stylesheets/Patient.css';

const PatientInfo = () => {
  const {id} = useParams()
  console.log(id)

  return (
    <div>
      <h3>ID: {id}.</h3>
    </div>
  );
};

export default PatientInfo;
