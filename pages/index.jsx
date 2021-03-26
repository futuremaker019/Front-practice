import {useState} from "react";
import {useRouter} from 'next/router'
import fetch from "isomorphic-unfetch";
import Link from "next/link";

// const index = ({user}) => {
//   const username = user && user.name;
//   return <div>{username}</div>
// }

// export const getServerSideProps = async() => {
//   try{
//     const res = await fetch("https://api.github.com/login");
//     if(res.status === 200) {
//       const user = await res.json(); console.log(user);
//       return {props : {user}};
//     }
//     return {props : {}};
//   } catch (e) {
//     console.log(e);
//     return {props:{}};
//   }
// }

const App = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <label>
        username
        <input value={username} onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <p>{username} 깃허브 검색하기</p>
      <Link href={`/users/${username}`}>
        <a>검색하기</a>
      </Link>
    </div>
  );
};

export default App;