import express from "express";
import SqliteManager from "./sqliteManager.js"
import cors from "cors"
import { northWindRouter } from "./routes/northWindRouter.js";

const thePath = "./backend/data/northwind_database.sqlite";

const sqm = new SqliteManager(thePath);
const records = await sqm.getRecordsWithSql(`SELECT ProductID, UnitPrice, ProductName FROM Products ORDER BY UnitPrice DESC LIMIT 10;`);

const app = express();
const port = process.env.PORT || 3012;

app.use(cors());
app.use(express.json());
app.use('/northwind', northWindRouter)

app.get("/", (req, res) => {
  res.json(records);
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
