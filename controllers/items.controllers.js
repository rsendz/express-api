import {sqlConnect , sql} from "../utils/sql.js";

export const getItems = async (req, res) => {
    const pool = await sqlConnect();
    const result = await pool.request().query("SELECT * FROM items");
    console.log("waiting for result");
    console.log(result.recordset);
    res.json(result);
};