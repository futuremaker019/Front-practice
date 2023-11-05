import { useState, useRef } from 'react';

const DiaryItem = ({
  onEdit,
  onDelete,
  id,
  author,
  content,
  emotion,
  createdDate,
}) => {
  // toggle 을 위한 state
  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => setIsEdit(!isEdit);

  const localContentInput = useRef();

  // content를 수정하기 위해 해당 컴포넌트에
  const [localContent, setLocalContent] = useState(content);

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  };

  const handleEdit = () => {
    if (window.confirm(`아이디 ${id}의 일기를 수정하시겠습니까?`)) {
      // 수정 메서드
      onEdit(id, localContent);
      // 수정창을 닫아줌
      toggleEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(createdDate).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            ref={localContentInput}
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          ></textarea>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정취소</button>
          <button onClick={handleEdit}>수정완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>식제하기</button>
          <button onClick={toggleEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
