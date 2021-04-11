import {createStore, applyMiddleware, combineReducers} from "redux";
import {HYDRATE, createWrapper} from "next-redux-wrapper";
import todo from "./todo";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector
} from "react-redux";

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const rootReducer = combineReducers({
  todo: todo.reducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,  // use previous state
      ...action.payload,  // apply delta from hydration
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  }
  return rootReducer(state, action);
};

// 스토어의 타입
export type RootState = ReturnType<typeof rootReducer>;

// 미들웨어 적용을 위한 스토어 enhancer
// const bindMiddleware = (middleware:any) => {
//   if (process.env.NODE_ENV !== "production") {
//     const {composeWithDevTools} = require("redux-devtools-extension");
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };

const initStore = () => {
  return createStore({
    reducer,
    devTools: true,
  });
}

// 타입 지원되는 커스텀 useSelector 만들기
declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

export const wrapper = createWrapper(initStore);