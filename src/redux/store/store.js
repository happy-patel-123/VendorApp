import { configureStore, combineReducers } from "@reduxjs/toolkit"
import cartReducer from '../slice/cartSlice'

const rootReducer = combineReducers({
    cartReducer
})

const store = configureStore({
    reducer: rootReducer
})