import { createSlice } from '@reduxjs/toolkit'

export const PatientSlice = createSlice({
  name: 'Patient',
  initialState: {
    loggedin : false
  },

  reducers: {
    patientlogin: (state) => {
      state.loggedin = true
    },
    patientlogout: (state) => {
      state.loggedin = false
    },
  },

})

// Action creators are generated for each case reducer function
export const { patientlogin , patientlogout } = PatientSlice.actions

export default PatientSlice.reducer