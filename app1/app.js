import express from "express";

const app = express();
const port = process.env.PORT || 8081;

app.get("/", (req, res) => {
  res.status(200).json({ message: "app1 is running..." });
});

app.listen(port, () => {
  console.log("server listening...");
});
