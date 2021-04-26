import { NextApiRequest, NextApiResponse } from "next"
import{ StoredUserType } from "../../../types/user"
import bcrypt from "bcryptjs"
import Data from '../../../lib/data/index';
import jwt from "jsonwebtoken";
import React from 'react';
import { signupAPI } from '../../../lib/api/auth';
// import { SignUpAPIBody } from "../../../lib/api/auth"

export default async (req: NextApiRequest, res:NextApiResponse) => {
  console.log("=========================");
  

  if(req.method === "POST") {
    const { body }  = req;
    const { email, firstname, lastname, password, birthday } = body;
    console.log(body);

    const userExist = Data.user.exist({email});
    console.log("userExist : " + userExist);

    if (userExist) {
      res.statusCode = 409;
      res.send("이미 가입된 이메일입니다.");
    }

    if (!email || !firstname || !lastname || !password || !birthday) {

      res.statusCode = 400;
      return res.send("필수 데이터가 없습니다.")
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    console.log("hashedPassword : " + hashedPassword);

    const users = Data.user.getList();

    let userId;
    if (users.length === 0) {
      userId = 1;
    } else {
      userId = users[users.length - 1].id + 1;
    }
    const newUser: StoredUserType = {
      id: userId,
      email,
      firstname,
      lastname,
      password: hashedPassword,
      birthday,
      profileImage: "/static/image/default_user_profile_image.jpg",
    };

    Data.user.write([...users, newUser]);

    const token = jwt.sign(String(newUser.id), process.env.JWT_SECRET!);
    console.log("token : "+ token);

    res.setHeader(
      "Set-Cookie",
      `access_token=${token}; path=/; expires=${new Date(
        Date.now() + 60 * 60 * 24 * 1000 * 3
      ).toISOString()}; httponly`
    );

    const newUserWithoutPassword: Partial<Pick<StoredUserType,"password">> = newUser;

    // delete을 사용하여 객체의 속성을 제거할 수 있다.
    delete newUserWithoutPassword.password;
    res.statusCode = 200;
    return res.send(newUser);
  }

  res.statusCode = 405;

  return res.end();
};