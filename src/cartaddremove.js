import { createSlice } from "@reduxjs/toolkit";
const initialState=[]

const cartaddremove=createSlice(
    {
        name:"count",
        initialState,
        reducers:{
            addcart:(state,action)=>
            {
                state.map((x) => {
                    if (x.id === action.payload.id) {
                        action.payload.quantity += x.quantity;
                        const cartlist = state.filter((item) => item.id != x.id)
                        state=[...cartlist]


                    }})
            return [...state, action.payload]
            },
             removecart: (state, action) => {
                
            }
        }
    }
)

export const {addcart, removecart}=cartaddremove.actions;
export default cartaddremove.reducer;