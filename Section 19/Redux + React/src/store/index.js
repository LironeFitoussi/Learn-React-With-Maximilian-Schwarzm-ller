// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
 name: "counter",
 initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
})

// export const INCREMENT = "increment"
// export const DECREMENT = "decrement"
// export const INCREASE = "increase"
// export const TOGGLE = "TOGGLE"

// const counterReducer = ( state = initialState,  action ) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, counter: state.counter + 1 };
//     case DECREMENT:
//       return { ...state, counter: state.counter - 1 };
//     case INCREASE:
//       return { ...state, counter: state.counter + action.amount };
//     case TOGGLE:
//       return { ...state, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };
//
// const store = createStore(counterReducer);
// const store = createStore(counterSlice.reducer);

const store = configureStore({
  reducer: counterSlice.reducer
});


// This is the Action Creator function: it returns an object with a type property
export const counterActions = counterSlice.actions;

export default store;
