import express from "express";

const app = express();
const port = process.env.PORT || 8083;

app.get("/", (req, res) => {
  res.status(200).json({ message: "app3 is running..." });
});

app.listen(port, () => {
  console.log("server listening...");
});
