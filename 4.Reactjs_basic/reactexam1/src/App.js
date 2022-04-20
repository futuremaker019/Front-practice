import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {
  const style = {
    App: {
      backgroundColor: 'pink',
    },
    h2: {
      color: 'red',
    },
    bold_text: {
      color: 'green',
    },
  };

  let name = 'Jung';

  const number1 = 5;
  const number2 = 6;

  return (
    <div className="App">
      <MyHeader />
      <header className="App-header">
        <h2 style={style.h2}>안녕 리액트 {name}</h2>
        <b style={style.bold_text} id="bold_text">
          {number1}는 : {number1 % 2 === 0 ? '짝수' : '홀수'} <br />
          {number2}는 : {number2 % 2 === 0 ? '짝수' : '홀수'}
        </b>
      </header>
      <MyFooter />
    </div>
  );
}

export default App;
