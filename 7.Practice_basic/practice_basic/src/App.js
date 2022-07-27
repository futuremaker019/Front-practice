import './App.css';
import DiaryList from './DairyList';
import DiaryEditor from './DiaryEditor';
import { useState, useRef } from 'react';

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
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const createdDate = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      createdDate,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([...data, newItem]);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={dummyData} />
    </div>
  );
}

export default App;
