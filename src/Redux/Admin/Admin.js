import { createSlice } from '@reduxjs/toolkit'

export const AdminSlice = createSlice({
  name: 'Admin',
  initialState: {
    loggedin: false,
  },

  reducers: {
    adminlogin: (state) => {
      state.loggedin = true
    },
    adminlogout: (state) => {
      state.loggedin = false
    },
  },

})

// Action creators are generated for each case reducer function
export const { adminlogin , adminlogout } = AdminSlice.actions

export default AdminSlice.reducer