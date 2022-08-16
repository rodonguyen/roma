import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import { getPatient } from '../apis/patient';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-balham.css';
import '../stylesheets/Patient.css';

const PatientInfo = () => {
  const { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
};

export default PatientInfo;
