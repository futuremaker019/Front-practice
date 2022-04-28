import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: 'futuremaker',
    content: '하이1',
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: '홍길동',
    content: '하이하이',
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: '아무개',
    content: '하이하이하이',
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: 'futuremaker019',
    content: '하이하이하이하이',
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
