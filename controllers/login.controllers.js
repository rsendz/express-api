import {sqlConnect , sql} from "../utils/sql.js";
import crypto from "crypto";

export const login = async (req, res) => {
  const pool = await sqlConnect();
  const result = await pool
      .request()
      .input("username", sql.VarChar, req.body.username)
      .query("SELECT password FROM users WHERE username = @username");

  if (result.recordset.length === 0) {
      return res.status(400).json({ isLogin: false, message: "User not found" });
  }

  const storedHash = result.recordset[0].password;
  const salt = storedHash.slice(process.env.SALT_SIZE);
  const pepper = process.env.PEPPER;
  const inputHash = pepper + crypto.createHash("sha256").update(req.body.password).digest("base64url") + salt;

  if (inputHash === storedHash) {
      res.status(200).json({ isLogin: true, message: "Login successful" });
  } else {
      res.status(400).json({ isLogin: false, message: "Invalid credentials" });
  }
};


export const newUser = async (req, res) => {
    const pool = await sqlConnect();
    const salt = crypto.randomBytes(process.env.RANDOM_BYTES_NUM).toString("base64url");
    const pepper = process.env.PEPPER;
    const hash = pepper + crypto.createHash("sha256").update(req.body.password).digest("base64url") + salt;
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
    const salt = crypto.randomBytes(process.env.RANDOM_BYTES_NUM).toString("base64url");
    const pepper = process.env.PEPPER;
    const hash = pepper + crypto.createHash("sha256").update(req.body.password).digest("base64url") + salt;
    const data = await pool
      .request()
      .input("username", sql.VarChar, req.body.username)
      .input("password", sql.VarChar, hash)
      .query("update users set password=@password where username=@username");
    res.status(200).json({ message: "User updated" });
  };