import { configureStore } from '@reduxjs/toolkit';
import { LandingPageReducer } from './slices/LandingPageReducer.js'
import MenuReducer from "./MenuReducer.js";
import { postReducer } from "./slices/PostSlice.js";
import { authReducer } from './slices/AuthSlice.js';

const store = configureStore({
    reducer: {
        posts: postReducer,
        auth: authReducer
    }
})
export default store;