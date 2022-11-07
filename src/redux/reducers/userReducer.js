import { createSlice } from '@reduxjs/toolkit';
import { login } from '../actions';

const INITIAL_STATE = {    
    data: {
        token: null,
        message: null,
    },        
        isAuth: false,
        isLoading: false   
}

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {},
     extraReducers:(builder) => {
         builder
             .addCase(login.pending,(state)=>{state.isLoading = true})
             .addCase(login.fulfilled, (state, action) => {
                 state.data = action.payload.data
                 state.isAuth = action.payload.isAuth
                 state.message = action.payload.message               
             })           
     }
})
export default userSlice.reducer