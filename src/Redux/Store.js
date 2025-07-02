import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import DoctorReducer from './Doctor/Doctor.js'
import PatientReducer  from './Patient/Patient.js'
import StaffReducer from './Staff/Staff.js'
import AdminReducer from './Admin/Admin.js';

const makePersistConfig = (key) => ({
  key,
  storage,
});
  
const rootreducer = {
  doctor: persistReducer(makePersistConfig('doctor'), DoctorReducer),
  patient: persistReducer(makePersistConfig('patient'), PatientReducer),
  staff: persistReducer(makePersistConfig('staff'), StaffReducer),
  admin: persistReducer(makePersistConfig('admin'), AdminReducer),
}

const store = configureStore({
  reducer: rootreducer,
})

export const persistor = persistStore(store);

export default store