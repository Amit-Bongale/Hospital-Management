import { createSlice } from '@reduxjs/toolkit'

export const DoctorSlice = createSlice({
  name: 'Doctor',
  initialState: {
    loggedin: false,
  },

  reducers: {
    doctorlogin: (state) => {
      state.loggedin = true
    },
    doctorlogout: (state) => {
      state.loggedin = false
    },
  },

})

// Action creators are generated for each case reducer function
export const { doctorlogin , doctorlogout } = DoctorSlice.actions

export default DoctorSlice.reducer