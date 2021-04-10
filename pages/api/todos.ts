import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import {TodoType} from "../../types/todo";


export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const todoBuffer = fs.readFileSync("data/todos.json");
      const todoString = todoBuffer.toString();
      if (!todoString) {
        res.statusCode = 200;
        res.send([]);    
      }
      const todos : TodoType[] = JSON.parse(todoString);
      res.statusCode = 200;
      return res.send(todos);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }

  res.statusCode = 405;
  console.log(res.statusCode);
  return res.end();
};