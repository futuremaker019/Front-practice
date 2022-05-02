import DiaryItem from './DiaryItem';

const DiaryList = ({ diaryList, onDelete }) => {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

// defautlProps를 이용하여 props에 어떠한 데이터도 전달이 되지 않았을때
// 초기화해서 값을 만들어준다.
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
