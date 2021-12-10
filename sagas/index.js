import { all, fork, call, take, put } from 'redux-saga/effects';
import axios from 'axios';

function loginAPI() {
	return axios.post('/api/login');
}

function* logIn() {
	const result = yield call(loginAPI);
	try {
		yield put({
			type: 'LOG_IN_SUCCESS',
			data: result.data
		});
	} catch (err) {
		yield put({
			type: 'LOG_IN_FAILURE',
			data: err.response.data
		});
	}
}

function* watchLogin() {
	// take LOG_IN이라는 action이 실행될때까지 기다린다.
	yield take('LOG_IN_REQUEST');
}

function* watchLogOut() {
	yield take('LOG_OUT_REQUEST');
}

function* watchAddPost() {
	yield take('ADD_POST_REQUEST');
}

export default function* rootSaga() {
	yield all([fork(watchLogin), fork(watchLogOut), fork(watchAddPost)]);
}
