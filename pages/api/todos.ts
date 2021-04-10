import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const todos = await new Promise<TodoType[]>((resolve, reject) => {
        // fs.readFile은 첫 번째 인자로 데이터를 불러올 파일의 경로를 받고,
        // 두번째 인자로 callback을 받는다. callback은 에러 값과 데이터 값을 받게 된다.
        // 불러온 파일 데이터는 Buffer 타입으로 toString을 이용하여 값을 문자열 형태로 불러올수 있다.
        fs.readFile("/data/todos.json", (err, data) => {
          if (err) {
            return reject(err.message);
          }
          const todosData = data.toString();
          if (!todosData) {
            // todos.json 값이 비어있다면 빈 배열을 리턴한다.
            // 값이 없으면 JSON.parse에서 에러가 난다.
            return resolve([]);
          }

          const todos = JSON.parse(data.toString());
          return resolve(todos);
        });
      });
      // 투두리스트 배열을 불러오는 데 성공했다면 200 코드와 함께 todos를 결과값으로 보내준다.
      res.statusCode = 200;
      return res.send(todos);
    } catch (error) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }

  res.statusCode = 405;
  console.log(res.statusCode);
  return res.end();
};