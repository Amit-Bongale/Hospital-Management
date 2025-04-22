import { createSlice } from '@reduxjs/toolkit'

export const AdminSlice = createSlice({
  name: 'Admin',
  initialState: {
    loggedin: false,
    showuser : false,
    adminid : '',
    adminname : '',
    role: 'admin',
  },

  reducers: {
    adminlogin: (state, action) => {
      state.loggedin = true
      state.adminid = action.payload.adminid
      state.adminname = action.payload.adminname
    },
    adminlogout: (state) => {
      state.loggedin = false
      state.adminid = ""
      state.adminname = ""
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