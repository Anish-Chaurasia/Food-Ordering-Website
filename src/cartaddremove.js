import { createSlice } from "@reduxjs/toolkit";
const initialState = []

const cartaddremove = createSlice(
    {
        name: "count",
        initialState,
        reducers: {
            addcart: (state, action) => {
                state.map((x) => {
                    if (x.id === action.payload.id) {
                        action.payload.quantity += x.quantity;
                        const cartlist = state.filter((item) => item.id != x.id)
                        state = [...cartlist]


                    }
                })
                return [...state, action.payload]
            },
            removecart: (state, action) => {
                const newcart = state.filter((item, id) => id != action.payload)
                return newcart

            }
            ,
            countplus: (state, action) => {
                const cartlist = state.map((item, id) => {
                    if (id == action.payload) {
                        item.quantity += 1;
                        return item
                    }
                    else {
                        return item
                    }
                })
                return void cartlist

            }, countminus: (state, action) => {
                const cartlist = state.map((item, id) => {
                    if (id == action.payload) {
                        if (item.quantity == 0) {

                        }
                        else {
                            item.quantity -= 1;
                            return item
                        }
                    }
                    else {
                        return item
                    }
                })
                return void cartlist

            }

        }
    }
)

export const { addcart, removecart, countminus, countplus } = cartaddremove.actions;
export default cartaddremove.reducer;