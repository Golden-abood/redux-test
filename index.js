const initState = { counter: 0 };
const counterReducer = (state = initState, action) => {
  if (action.type === "increase") {
    return { ...state, counter: state.counter + action.payload };
  }
  if (action.type === "decrease") {
    return { ...state, counter: state.counter - action.payload };
  }
  return state;
};

const store = Redux.createStore(counterReducer);

const counter = () => {
  document.getElementById("counter").innerText = store.getState().counter;
};
store.subscribe(counter);
counter();
console.log(store);

const increase = () => {
  const action = { type: "increase", payload: 5 };
  store.dispatch(action);
};
const decrease = () => {
  const action = { type: "decrease", payload: 1 };
  store.dispatch(action);
};
