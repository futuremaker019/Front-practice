import React, { useEffect, useState } from 'react';

const UnmountComponent = () => {
  useEffect(() => {
    console.log('Mount!');

    return () => {
      // Unmount 시점에 실행되게 한다.
      console.log('Unmount!');
    };
  }, []);

  return <div>UnmountComponent</div>;
};

const Lifecycle = () => {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState('');

  // // Mount시 한번만 실행됨
  // useEffect(() => {
  //   console.log('Mount!');
  // }, []);

  // // 리렌더링 시 계속 실행됨
  // useEffect(() => {
  //   console.log('Update');
  // });

  // // count의 state 변경시 실행됨
  // useEffect(() => {
  //   console.log(`count is update ${count}`);
  //   if (count > 5) {
  //     alert('count가 5보다 큽니다. 값을 초기화합니다.');
  //     setCount(0);
  //   }
  // }, [count]);

  // // text의 state 변경시 실행됨
  // useEffect(() => {
  //   console.log(`text is update ${text}`);
  // }, [text]);

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      {/* <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div> */}

      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountComponent />}
    </div>
  );
};

export default Lifecycle;
