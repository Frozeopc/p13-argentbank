import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loginUrl =  "http://localhost:3001/api/v1/user/login"
const profileUrl = "http://localhost:3001/api/v1/user/profile"

 export const login = createAsyncThunk(
     'user/login',
     async ({email, password}) => {
        try {
            const response = await axios.post(loginUrl, {
                email: email,
                password: password 
            })
            localStorage.setItem('token', response.data.body.token)
            localStorage.setItem('isAuth', true)
                return  { data: response.data.body , message: response.data.message , isAuth: true}
        }catch (error){
            localStorage.setItem('error', 'badRequest')
        }
    }
 )
export const profile = createAsyncThunk(
    'user/profile',   
    async (token) => {
        const config = {
            headers: {
                'authorization' : `Bearer ${token}`
            }
        }
        const response = await axios.post(profileUrl, {}, config)
            return { data: response.data.body, message: response.data.message, isAuth: true }       
    }
)
 export const update = createAsyncThunk(
     'user/update',
     async ( data ) => {
        const firstName = data.firstName
        const lastName = data.lastName
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                'authorization' : `Bearer ${token}`
            }
        }       
         const response = await axios.put(profileUrl,{firstName, lastName}, config )
         return { data: response.data.body, isAuth: true}
     }
)