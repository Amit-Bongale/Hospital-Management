import { createSlice } from '@reduxjs/toolkit'

export const StaffSlice = createSlice({
  name: 'Staff',
  initialState: {
    loggedin: false,
  },

  reducers: {
    stafflogin: (state) => {
      state.loggedin = true
    },
    stafflogout: (state) => {
      state.loggedin = false
    },
  },

})

// Action creators are generated for each case reducer function
export const { stafflogin , stafflogout } = StaffSlice.actions

export default StaffSlice.reducer