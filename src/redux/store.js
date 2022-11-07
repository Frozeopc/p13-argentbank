import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import profilReducer from './reducers/profilReducer';
import updateReducer from './reducers/updateReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profil: profilReducer,
    update: updateReducer,
  }
})

export default store