import axios from "axios"
import { UserType } from "../../types/user"

// 사용자 인증에 관련된 api를 모아놓은 파일
// 회원가입 body
interface SignUpAPIBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  birthday: string;
}

// 회원가입 api를 사용하는 함수를 만들도록 한다.
// 회원가입 api
export const signupAPI = (body: SignUpAPIBody) =>
  axios.post<UserType>("/api/auth/signup", body);

export const loginAPI = (body: {email: string; password: string}) => {
  axios.post<UserType>("/api/auth/login", body);
}