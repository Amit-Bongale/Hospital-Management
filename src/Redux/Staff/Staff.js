import { createSlice } from '@reduxjs/toolkit'

export const StaffSlice = createSlice({
  name: 'Staff',
  initialState: {
    loggedin: false,
    staffid : '',
    staffname: '',
  },

  reducers: {
    stafflogin: (state , action) => {
      state.loggedin = true
      state.staffid = action.payload.staffid
      state.staffname = action.payload.staffname
    },
    stafflogout: (state) => {
      state.loggedin = false
      state.staffid = ''
      state.staffname = ''
    },
  },

})

// Action creators are generated for each case reducer function
export const { stafflogin , stafflogout } = StaffSlice.actions

export default StaffSlice.reducer