import "express-async-errors";
import express, { json } from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app
  .use(json())
  .use(cors())
  .get("/", (req, res) => {
    res.send("Hello World!");
  })

  .listen(process.env.PORT, () =>
    console.log(`Server running on port ${port}...`)
  );
