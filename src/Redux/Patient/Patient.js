import { createSlice } from '@reduxjs/toolkit'

export const PatientSlice = createSlice({
  name: 'Patient',
  initialState: {
    loggedin : false,
    patientId: null,
    patientName: null,
  },

  reducers: {
    patientlogin: (state , action) => {
      state.loggedin = true;
      state.patientId = action.payload.id; 
      state.patientName = action.payload.name; 
    },
    patientlogout: (state) => {
      state.loggedin = false;
      state.patientId = null; 
      state.patientName = null;
    },
    test: (state) => {
      state.patientId = null; 
    }
  },

})

// Action creators are generated for each case reducer function
export const { patientlogin , patientlogout, test } = PatientSlice.actions;

export default PatientSlice.reducer