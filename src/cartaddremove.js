import { createSlice } from "@reduxjs/toolkit";
const initialState=[]

const cartaddremove=createSlice(
    {
        name:"count",
        initialState,
        reducers:{
            addcart:(state,action)=>
            {
             return [...state, action.payload]
            },
             removecart: (state, action) => {
                
            }
        }
    }
)

export const {addcart, removecart}=cartaddremove.actions;
export default cartaddremove.reducer;