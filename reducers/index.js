const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpDate: {},
    loginData: {}
  },
  post: {
    mainPost: []
  }
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  }
}

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  }
}

// action creator
const chagneNickname = (data) => {
  return {
    type: 'CHANGE_NICKNAME',
    data,
  }
}

// (이전 상태, 액션) => 다음 상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NICKNAME':
      return {
        ...state,
        name: action.data,
      }
    case 'LOG_IN':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        }
      }
    case 'LOG_OUT':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        }
      }
  }
};

export default rootReducer;