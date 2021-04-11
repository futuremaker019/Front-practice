import { NextApiRequest, NextApiResponse } from "next";
import Data from "../../../lib/data/index"
import fs from "fs";
import {TodoType} from "../../../types/todo";


export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const todos = Data.todo.getList();
      res.statusCode = 200;
      return res.send(todos);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }

  if (req.method === "POST") {
    // 값을 받았는지 확인
    const { text, color } = req.body;
    if (!text || !color) {
      res.statusCode = 400;
      return res.send("text 혹은 color 가 없습니다.");
    }
  }

  // res.statusCode = 405;
  // console.log(res.statusCode);
  // return res.end();
};