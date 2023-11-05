import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './MyButton';

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();

  // 기본적으로 `process.env.PULBIC_URL은 public 디렉토리를 가리킨다.`
  // env가 동작하지 않는다면 해당하는 env 변수를 등록해준다.
  // const env = process.env;
  // env.PUBLIC_URL = env.PUBLIC_URL || '';

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={[
          'emotion_img_wrapper',
          `emotion_img_wrapper_${emotion}`,
        ].join(' ')}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div onClick={goDetail} className="info_wrapper">
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <MyButton text={'수정하기'} onClick={goEdit} />
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
