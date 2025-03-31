import {sqlConnect , sql} from "../utils/sql.js";

// USE STORED PROCEDURES IN REAL WORLD APPLICATIONS INSTEAD TO PREVENT SECURITY ISSUES.

export const getItems = async (req, res) => {
    const pool = await sqlConnect();
    const result = await pool.request().query("SELECT * FROM items");
    // console.log(result.recordset);
    res.json(result.recordset);
};

export const getItem = async (req, res) => {
    const pool = await sqlConnect();
    const result = await pool
        .request()
        .input("id", sql.Int, req.params.id) // In req.params.id, it is called id because of the definition of the route /items/:id <-
        .query("SELECT * FROM items WHERE id_item = @id"); // @id is the same name as the one defined in the first part of the input.
    res.json(result.recordset);
};

export const postItem = async (req, res) => {
    const pool = await sqlConnect();
    const result = await pool
        .request()
        .input("name", sql.VarChar, req.body.name)
        .input("price", sql.VarChar, req.body.price)
        .query("INSERT INTO items (name, price) VALUES (@name, @price)");
    res.status(200).json({operation: true});
};

export const putItem = async (req, res) => {
    const pool = await sqlConnect();
    const result = await pool
        .request()
        .input("id", sql.Int, req.params.id)
        .input("name", sql.VarChar, req.body.name)
        .input("price", sql.VarChar, req.body.price)
        .query("UPDATE items SET name = @name, price = @price WHERE id_item = @id");
    res.status(200).json({operation: true});
};

export const deleteItem = async (req, res) => {
    const pool = await sqlConnect();
    const result = await pool
        .request()
        .input("id", sql.Int, req.params.id)
        .query("DELETE FROM items WHERE id_item = @id");
    res.status(200).json({operation: true});
};