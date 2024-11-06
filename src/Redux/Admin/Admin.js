import { createSlice } from '@reduxjs/toolkit'

export const AdminSlice = createSlice({
  name: 'Admin',
  initialState: {
    loggedin: false,
    showuser : false
  },

  reducers: {
    adminlogin: (state) => {
      state.loggedin = true
    },
    adminlogout: (state) => {
      state.loggedin = false
    },

    openusers: (state) => {
      state.showuser = true
    },
    hideusers: (state) => {
      state.showuser = false
    }

  },

})

// Action creators are generated for each case reducer function
export const { adminlogin , adminlogout, openusers , hideusers } = AdminSlice.actions

export default AdminSlice.reducer