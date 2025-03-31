import {sqlConnect , sql} from "../utils/sql.js";
import crypto from "crypto";

export const login = async (req, res) => {
    const pool = await sqlConnect();
    const result = await pool
        .request()
        .input("username", sql.VarChar, req.body.username)
        .query("SELECT * FROM users WHERE username = @username");
    let isLogin = result.recordset[0].password === req.body.password // result.recordset[0] is the first row of the result which is only one row in this case
    if (isLogin) {
        res.status(200).json({ isLogin : isLogin, user: data.recordset[0] });
    } else {
        res.status(400).json({ isLogin : isLogin, user : {} });
    }
};

export const newUser = async (req, res) => {
    const pool = await sqlConnect();
    const salt = crypto.randomBytes(24).toString("base64url");
    console.log(salt);
    const hash = (crypto.createHash("sha256").update(req.body.password).digest("base64url")) + salt;
    console.log(hash);
    const data = await pool
      .request()
      .input("name", sql.VarChar, req.body.name)
      .input("username", sql.VarChar, req.body.username)
      .input("password", sql.VarChar, hash)
      .query("Insert into users (name, username, password) values (@name, @username, @password)");
    res.status(200).json({ message: "User created" });
  };
  
  export const updateUser = async (req, res) => {
    const pool = await sqlConnect();
    const salt = crypto.randomBytes(24).toString("base64url");
    const hash = (crypto.createHash("sha256").update(req.body.password).digest("base64url")) + salt;
    const data = await pool
      .request()
      .input("username", sql.VarChar, req.body.username)
      .input("password", sql.VarChar, hash)
      .query("update users set password=@password where username=@username");
    res.status(200).json({ message: "User updated" });
  };