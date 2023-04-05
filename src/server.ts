import "express-async-errors";
import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${port}`)
);
