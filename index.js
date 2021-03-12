import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//para el deploy
app.get("/", (req, res) => {
  res.send("Hello to memories API");
});
app.listen(5000, () => console.log(`Server running on port: ${5000}`));
