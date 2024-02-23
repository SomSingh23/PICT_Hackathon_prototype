let express = require("express");
let cors = require("cors");
let run = require("./model_1_text");
require("dotenv").config();
let app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => {
  console.log("server up and running");
});
app.get("/", (req, res) => {
  res.send("server running");
});
app.post("/chat/bot1", async (req, res) => {
  try {
    let prompt = req.body.prompt;
    let data = await run(prompt);
    return res.status(200).json({
      user: prompt,
      response: data,
    });
  } catch (err) {
    return res.status(200).json({
      user: prompt,
      response: "something went wrong 😢",
    });
  }
});
app.get("*", (req, res) => {
  res.status(404).send("404 not found");
});
