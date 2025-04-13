import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    default: return state;
  }
};

function CounterReducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
    </div>
  );
}

export default CounterReducer;
