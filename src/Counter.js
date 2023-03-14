import React, { useReducer, useState } from 'react';

// 리듀서는 밖으로 빠진다


function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  // [상태값, dispatch] = 
  // * dispatch == 액션을 발생시키는 함수를 전달
  const [number, dispatch] = useReducer(reducer, 0)

  const onIncrease = () => {
    dispatch({type: 'INCREMENT'})
  }

  const onDecrease = () => {
    dispatch({type: 'DECREMENT'})
  }
  

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;