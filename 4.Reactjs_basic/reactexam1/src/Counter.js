import React, { useState } from 'react';
import OddEvenResult from './OddEvenResult';

// 비구조화 할당으로도 가능하다.
const Counter = ({ initialValue }) => {
  // console.log(props);
  console.log(initialValue);
  const [count, setCount] = useState(initialValue);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count} />
    </div>
  );
};

// props에 initialValue가 존재하지 않으면 defaultProps를 이용하여 initialValue의 초기값을 적용해준다.
Counter.defaultProps = {
  initialValue: 0,
};

export default Counter;
