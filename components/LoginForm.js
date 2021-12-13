import React, { useCallback, useMemo, useState } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

const ButtonWrapper = styled.div`
	margin-top: 10px;
`;

const FormWrapper = styled(Form)`
	padding: 10px;
`;

const LoginForm = () => {
	const dispatch = useDispatch();
	const { logInLoading } = useSelector((state) => state.user);

	const [email, onChangeEmail] = useInput('');
	const [password, onChangePassword] = useState('');

	// const style = useMemo(() => ({marginTop: 10}), []);

	const onSubmitForm = useCallback(() => {
		console.log(email, password);
		dispatch(loginRequestAction({ id: email, password }));
	}, [email, password]);

	return (
		<FormWrapper onFinish={onSubmitForm}>
			<div>
				<label htmlFor={'user-id'}>이메일</label>
				<br />
				<Input
					type={'email'}
					name={'user-id'}
					value={email}
					onChange={onChangeEmail}
					required
				/>
			</div>
			<div>
				<label htmlFor={'user-password'}>비밀번호</label>
				<br />
				<Input
					name={'user-password'}
					type={'password'}
					value={password}
					onChange={onChangePassword}
					required
				/>
			</div>
			{/*useMemo를 사용하여 리랜더링을 방지한다.*/}
			{/*<ButtonWrapper style={style}>*/}
			<ButtonWrapper>
				<Button type={'primary'} htmlType={'submit'} loading={logInLoading}>
					로그인
				</Button>
				<Link href={'/signup'}>
					<a>
						<button>회원가입</button>
					</a>
				</Link>
			</ButtonWrapper>
		</FormWrapper>
	);
};

export default LoginForm;
