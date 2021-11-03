import express from "express";
import SqliteManager from "../sqliteManager.js";

const northWindRouter = express.Router();
const sqm = new SqliteManager("./backend/data/northwind_database.sqlite");

northWindRouter.get("/", async (req, res) => {
  const test = await sqm.getRecordsWithSql(
    `SELECT ProductID, UnitPrice, ProductName FROM Products ORDER BY UnitPrice DESC LIMIT 10;`
  );
  res.json(test);
});

export { northWindRouter };
