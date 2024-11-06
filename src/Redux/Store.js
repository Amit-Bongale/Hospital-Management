import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import DoctorReducer from './Doctor/Doctor.js'
import PatientReducer  from './Patient/Patient.js'
import StaffReducer from './Staff/Staff.js'
import AdminReducer from './Admin/Admin.js';


const persistConfig = {
  key: 'root',
  storage,
};
  
const rootreducer = {
  doctor : persistReducer(persistConfig, DoctorReducer),
  patient : persistReducer(persistConfig , PatientReducer ),
  staff : persistReducer(persistConfig , StaffReducer),
  admin : persistReducer(persistConfig, AdminReducer),
}

const store = configureStore({
  reducer: rootreducer,
})

export const persistor = persistStore(store);

export default store