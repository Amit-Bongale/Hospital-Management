import { createSlice } from '@reduxjs/toolkit'

export const DoctorSlice = createSlice({
  name: 'doctor',
  initialState: {
    loggedin: false,
    doctorid : '',
    doctorname: '',
    role: 'doctor',
  },

  reducers: {
    doctorlogin: (state, action) => {
      state.loggedin = true;
      state.doctorid = action.payload.doctorid;
      state.doctorname = action.payload.doctorname;
    },
    doctorlogout: (state) => {
      state.loggedin = false
      state.doctorid = ''
      state.doctorname = ''
    },
  },

})

// Action creators are generated for each case reducer function
export const { doctorlogin , doctorlogout } = DoctorSlice.actions

export default DoctorSlice.reducer