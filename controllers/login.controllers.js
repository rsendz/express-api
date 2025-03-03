import {sqlConnect , sql} from "../utils/sql.js";

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