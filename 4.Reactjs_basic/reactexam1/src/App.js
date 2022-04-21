// import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';

function App() {
  const number = 5;

  const countProps = {
    a: 1,
    b: 2,
  };

  return (
    <Container>
      <div>
        <MyHeader />

        {/* 부모 컴포넌트(APP)에서 자식 컴포넌트(Counter)로 값을 전달한다. */}
        {/* 전달된 props는 객체 형태로 만들어진다. */}
        {/* <Counter a={1} initialValue={5} /> */}
        <Counter {...countProps} />
      </div>
    </Container>
  );
}

export default App;
