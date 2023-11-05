import {NextApiRequest, NextApiResponse} from "next";
import Data from "../../../lib/data"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PATCH") {
    try {
      const todoId = Number(req.query.id);
      const todo = Data.todo.exist({id:todoId});
      if (!todo) {
        res.statusCode = 404;
        res.end();
      }
      const todos = Data.todo.getList();
      const changedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return {...todo, checked: !todo.checked};
        }
        return todo;
      })
      Data.todo.write(changedTodos);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }

  if (req.method === "DELETE") {
    try {
      const todoId = Number(req.query.id);
      // 해당 투두가 존재하는지 확인
      const todo = Data.todo.exist({id:todoId});
      if (!todo) {
        res.statusCode = 404;
        res.end();
      }

      // 전체 todo를 받아온다.
      const todos = Data.todo.getList();
      // 해당 id의 todo는 제외하고 나머지를 저장한다.
      const filteredTodos = todos.filter((todo) => todo.id !== todoId);
      Data.todo.write(filteredTodos);
      res.statusCode = 200;
      res.end();
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.send(error);
    }  
  }

  res.statusCode = 405;
  return res.end();
}