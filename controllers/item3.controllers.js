import db from "../utils/db_connections/firebase.js";

export const getItems = async (req, res) => {
  const items = await db.collection("items").get();
  const list = [];
  items.forEach((doc) =>
    list.push({ id: doc.id, name: doc.data().name, price: doc.data().price })
  );
  res.json(list);
};

export const getItem = async (req, res) => {
  const items = await db.collection("items").doc(req.params.id).get();
  res.json({
    id: req.params.id,
    name: items.data().name,
    price: items.data().price,
  });
};

export const postItem = async (req, res) => {
  const item = await db.collection("items").add(req.body);
  res.json({ id: item.id, name: req.body.name, price: req.body.price });
};

export const putItem = async (req, res) => {
  await db.collection("items").doc(req.params.id).update(req.body);
  res.json({ id: req.params.id, name: req.body.name, price: req.body.price });
};

export const deleteItem = async (req, res) => {
  await db.collection("items").doc(req.params.id).delete();
  res.status(200).json({ msg: "item eliminado" });
};