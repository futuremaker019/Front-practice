import {readFileSync} from "fs";
import {TodoType} from "../../types/todo";

// 투두리스트 데이터 불러오기
const getList = () => {
  const todosBuffer = readFileSync("data/todos.json");
  const todosString = todosBuffer.toString();
  if (!todosString) {
    return [];
  }
  const todos: TodoType[] = JSON.parse(todosString);
  return todos;
};

// Data.todo에 쿼리의 id로 동일한 id의 투두가 있는지 확인하는 함수
const exist = ({id}: {id:number}) => {
  const todos = getList();
  const todo = todos.some((todo) => todo.id === id);
  return todo;
}

export default {getList, exist};