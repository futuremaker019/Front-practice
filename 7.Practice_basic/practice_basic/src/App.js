import './App.css';
import DiaryList from './DairyList';
import DiaryEditor from './DiaryEditor';

const dummyData = [
  {
    id: 1,
    author: 'happy',
    content: '하하호호',
    emotion: 1,
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    author: 'holyday',
    content: '하하호호',
    emotion: 1,
    createdDate: new Date().getTime(),
  },
  {
    id: 3,
    author: 'holyday',
    content: '하하호호',
    emotion: 1,
    createdDate: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyData} />
    </div>
  );
}

export default App;
