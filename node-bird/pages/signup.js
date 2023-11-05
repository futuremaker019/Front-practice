import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Button, Checkbox, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import useInput from '../hooks/useInput';
import styled from 'styled-components';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

const ErrorMessage = styled.div`
	color: red;
`;

const Signup = () => {
	const [email, onChangeEmail] = useInput('');
	const [password, onChangePassword] = useInput('');
	const [nickname, onChangeNickname] = useInput('');

	const [passwordCheck, setPasswordCheck] = useState('');
	const [passwordError, setPasswordError] = useState(false);

	const dispatch = useDispatch();
	const { signUpLoading } = useSelector((state) => state.user);

	const onChangePasswordCheck = useCallback(
		(e) => {
			setPasswordCheck(e.target.value);
			setPasswordError(e.target.value !== password);
		},
		[password]
	);

	const [term, setTerm] = useState('');
	const [termError, setTermError] = useState(false);
	const onChangeTerm = useCallback((e) => {
		setTerm(e.target.checked);
		setTermError(false);
	}, []);

	const onSubmit = useCallback(() => {
		if (password !== passwordCheck) {
			return setPasswordError(true);
		}
		if (!term) {
			return setTermError(true);
		}
		console.log(email, nickname, password);

		dispatch({
			type: SIGN_UP_REQUEST,
			data: { email, password, nickname }
		});
	}, [password, passwordCheck, term]);

	return (
		<AppLayout>
			<Head>
				<title>회원가입 | NodeBird</title>
			</Head>
			<Form onFinish={onSubmit}>
				<div>
					<label htmlFor={'user-id'}>이메일</label>
					<br />
					<Input
						type={'email'}
						name={'user-id'}
						value={email}
						required
						onChange={onChangeEmail}
					/>
				</div>
				<div>
					<label htmlFor={'user-nickname'}>닉네임</label>
					<br />
					<Input
						name={'user-nickname'}
						value={nickname}
						required
						onChange={onChangeNickname}
					/>
				</div>
				<div>
					<label htmlFor={'user-password'}>비밀번호</label>
					<br />
					<Input
						name={'user-password'}
						type={'password'}
						value={password}
						required
						onChange={onChangePassword}
					/>
				</div>
				<div>
					<label htmlFor={'user-password-check'}>비밀번호체크</label>
					<br />
					<Input
						name={'user-password-check'}
						type={'password'}
						value={passwordCheck}
						required
						onChange={onChangePasswordCheck}
					/>
					{passwordError && (
						<ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
					)}
				</div>
				<div>
					<Checkbox name={'user-term'} checked={term} onChange={onChangeTerm}>
						약관에 동의합니다.
					</Checkbox>
					{termError && (
						<div style={{ color: 'red' }}>약관에 동의해야 합니다.</div>
					)}
				</div>
				<div style={{ marginTop: 10 }}>
					<Button type={'primery'} htmlType={'submit'} loading={signUpLoading}>
						회원가입
					</Button>
				</div>
			</Form>
		</AppLayout>
	);
};

export default Signup;
