import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";



const userSlice = createSlice({
    name:'user',
    initialState:{email:"safa@gmail.com" , password:"safa1999" , isLogged:false},
    reducers:{
        login:(state , action)=>{
            if(action.payload.email === state.email &&action.payload.password == state.password){
                Swal.fire({
                    title: "Login",
                    text: "Successfull",
                    type: "success"
                })
                state.isLogged = true
            }else{
                Swal.fire({
                    title: "Wrong",
                    text: "incorrect Email or Password",
                    type: "success"
                }).then(function() {
                    window.location = `/login`;
                });
            }
        },
        logout:(state)=>{
            state.isLogged = false;
        }
    }
});
export const {login , logout} = userSlice.actions;
export default userSlice.reducer;