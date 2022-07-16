import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DiaryItem from './DiaryItem';
import MyButton from './MyButton';

const sortOptionList = [
  { value: 'latest', name: '최신순' },
  { value: 'oldest', name: '오래된 순' },
];

const filterOptionList = [
  { value: 'all', name: '전부다' },
  { value: 'good', name: '좋은 감정만' },
  { value: 'bad', name: '안좋은 감정만' },
];

// value : select가 어떤것을 선택하고 있는지의 역할
// onChange : select가 변화됬을때 바꿀 기능 (?)
// optionList : select tag 안의 option tag
const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState('latest');
  const [filter, setFilter] = useState('all');

  const getProcessdDiaryList = () => {
    const filterCallback = (item) => {
      if (filter === 'good') {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    // sort 메서드를 위한 compare 메서드 생성
    const compare = (a, b) => {
      if (sortType === 'latest') {
        // 문지열도 들어올수 있기 때문에 parstInt한다.
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    // 배열의 원본을 사용하여 sort 하지 않고 배열을 복사하여 sort한다. (이유는?)
    // stringify -> parse 를 해주면 깊은복사가 일어난다고 한다.
    const copyList = JSON.parse(JSON.stringify(diaryList));
    const filteredList =
      filter === 'all' ? copyList : copyList.filter((it) => filterCallback(it));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className="right_col">
          <MyButton
            type={'positive'}
            text={'새 일기쓰기'}
            onClick={() => navigate('/new')}
          />
        </div>
      </div>

      {getProcessdDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
