// Code for the store configuration
import { configureStore } from "@reduxjs/toolkit";

// Slices imports
import counterReducer from "./counter";
import authReducer from "./auth";

// Store configuration
const store = configureStore({
  reducer: { 
    counter: counterReducer,
    auth: authReducer
  },
});

// Exporting store
export default store;
