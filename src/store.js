import { configureStore } from "@reduxjs/toolkit";
import cartaddremove from "./cartaddremove";



const store=configureStore({
    reducer:{
        count:cartaddremove
    }
})
export default store;