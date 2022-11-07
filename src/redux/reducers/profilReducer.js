import { createSlice } from '@reduxjs/toolkit';
import { profile } from '../actions';

const INITIAL_STATE = {  
    data: {
        token: null,
        message: null,
        firstname: null,
        lastname: null,
    },       
        isAuth: false,
        isLoading: false   
}

export const profilSlice = createSlice({
    name: 'profil',
    initialState: INITIAL_STATE,
    reducers: {},
      extraReducers:(builder) => {
         builder           
              .addCase(profile.pending,(state)=>{state.isLoading = true})
              .addCase(profile.fulfilled, (state, action) => {
                  state.data = action.payload.data;
                  state.isAuth = action.payload.isAuth
                  state.message = action.payload.message              
             })           
      }
})
export default profilSlice.reducer