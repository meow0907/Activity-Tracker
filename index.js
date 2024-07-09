require("dotenv").config();
const express = require("express");
const app = express();

const PORT = Number(process.env.PORT) || 8000;
const indexRouter = require("./routes");

app.use(express.json()); //enable json body data
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  const errMsg = err.toString() || "Something went wrong";
  //   console.log(err.toString());
  res.status(500).json({ msg: errMsg });
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
