import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import post from './post';

const initialState = {
	user: {},
	post: {}
};

// (이전 상태, 액션) => 다음 상태
const rootReducer = combineReducers({
	// HYDRATE를 사용하기 위해 index를 추가한다. (서버사이드 랜더링을 위해서)
	index: (state = {}, action) => {
		switch (action.type) {
			case HYDRATE:
				console.log('HYDRATE', action);
				return { ...state, ...action.payload };
			default:
				return state;
		}
	},
	user,
	post
});

export default rootReducer;
