import './App.css';
import DiaryList from './DairyList';
import DiaryEditor from './DiaryEditor';
import { useState, useRef } from 'react';

const dummyData = [
  {
    id: 1,
    author: 'happy',
    content: '첫번째 항목',
    emotion: 1,
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    author: 'holyday',
    content: '두번째 항목',
    emotion: 1,
    createdDate: new Date().getTime(),
  },
  {
    id: 3,
    author: 'holyday',
    content: '세번째 항목',
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

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  const onDelete = (targetId) => {
    console.log(`아이디 ${targetId}의 일기가 삭제되었습니다.`);
    const filteredList = data.filter((it) => it.id !== targetId);
    setData(filteredList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;
