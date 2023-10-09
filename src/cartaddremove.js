import { createSlice } from "@reduxjs/toolkit";
const initialState = [{
    id: 8,
    title: 'Gulaab-Jaamun',
    category: 'Desert',
    price: 20,
    img: './images/menu_images/menu/gulabjamun.jpg',
    desc: "Gulab jamun is among India's most popular desserts and is often referred to as Indian doughnuts. This delicious sweet treat consists of soft, melt-in-your-mouth.",
}, {
        id: 8,
        title: 'Gulaab-Jaamun',
        category: 'Desert',
        price: 20,
        img: './images/menu_images/menu/gulabjamun.jpg',
        desc: "Gulab jamun is among India's most popular desserts and is often referred to as Indian doughnuts. This delicious sweet treat consists of soft, melt-in-your-mouth.",
    }, {
        id: 8,
        title: 'Gulaab-Jaamun',
        category: 'Desert',
        price: 20,
        img: './images/menu_images/menu/gulabjamun.jpg',
        desc: "Gulab jamun is among India's most popular desserts and is often referred to as Indian doughnuts. This delicious sweet treat consists of soft, melt-in-your-mouth.",
    }, {
        id: 8,
        title: 'Gulaab-Jaamun',
        category: 'Desert',
        price: 20,
        img: './images/menu_images/menu/gulabjamun.jpg',
        desc: "Gulab jamun is among India's most popular desserts and is often referred to as Indian doughnuts. This delicious sweet treat consists of soft, melt-in-your-mouth.",
    }, {
        id: 8,
        title: 'Gulaab-Jaamun',
        category: 'Desert',
        price: 20,
        img: './images/menu_images/menu/gulabjamun.jpg',
        desc: "Gulab jamun is among India's most popular desserts and is often referred to as Indian doughnuts. This delicious sweet treat consists of soft, melt-in-your-mouth.",
    }, 
    {
        id: 8,
        title: 'Gulaab-Jaamun',
        category: 'Desert',
        price: 20,
        img: './images/menu_images/menu/gulabjamun.jpg',
        desc: "Gulab jamun is among India's most popular desserts and is often referred to as Indian doughnuts. This delicious sweet treat consists of soft, melt-in-your-mouth.",
    }, {
    id: 8,
    title: 'Gulaab-Jaamun',
    category: 'Desert',
    price: 20,
    img: './images/menu_images/menu/gulabjamun.jpg',
    desc: "Gulab jamun is among India's most popular desserts and is often referred to as Indian doughnuts. This delicious sweet treat consists of soft, melt-in-your-mouth.",
},]

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