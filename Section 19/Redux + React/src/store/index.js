import { createStore } from "redux";

const counterReducer = (
  state = {
    counter: 0,
    showCounter: true,
  },
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "INCREASE":
      return { ...state, counter: state.counter + action.amount };
    case "TOGGLE":
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
