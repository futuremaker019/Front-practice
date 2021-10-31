import React, {useCallback, useMemo, useState} from 'react';
import {Button, Form, Input} from 'antd';
import Link from "next/link"
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // 컴포넌트에 props로 넘겨주는 함수는 useCallBack을 꼭 써야 최적화가 된다.
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  // const style = useMemo(() => ({marginTop: 10}), []);

  return (
    <Form>
      <div>
        <label htmlFor={"user-id"}>아이디</label>
        <br/>
        <Input
          name={"user-id"}
          type={"text"}
          value={id}
          onChange={onChangeId}
          required/>
      </div>
      <div>
        <label htmlFor={"user-password"}>비밀번호</label>
        <br/>
        <Input
          name={"user-password"}
          type={"password"}
          value={password}
          onChange={onChangePassword}
          required
         />
      </div>
      {/*useMemo를 사용하여 리랜더링을 방지한다.*/}
      {/*<ButtonWrapper style={style}>*/}
      <ButtonWrapper>
        <Button type={"primary"} htmlType={"submit"} loading={false}>로그인</Button>
        <Link href={"/signup"}>
          <a><buton>회원가입</buton></a>
        </Link>
      </ButtonWrapper>
    </Form>
  );
}

export default LoginForm;