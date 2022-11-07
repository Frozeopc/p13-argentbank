import { createSlice } from '@reduxjs/toolkit';
import {  update } from '../actions';

const INITIAL_STATE = {   
    data: {
        token: null,
        message: null,
        firstName: null,
        lastName: null,
    },       
        isAuth: false,
        isLoading: false   
}

export const updateSlice = createSlice({
    name: 'update',
    initialState: INITIAL_STATE,
    reducers: {},
     extraReducers:(builder) => {
         builder
             .addCase(update.pending,(state)=>{state.isLoading = true})
             .addCase(update.fulfilled, (state, action) => {
                 state.data = action.payload.data
                 state.isAuth = action.payload.isAuth
                 state.message = action.payload.message
                
             })             
     }
})
export default updateSlice.reducer