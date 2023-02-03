const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8080;
console.log(morgan);

app.use(express.json());

app.get(
  "/upload",
  morgan(
    ":method :url :status :res[content-length] :response-time ms :date :http-version :user-agent"
  ),
  function (req, res) {
    res.send("morganmkji");
  }
);

app.listen(port, () => {
  console.log("server started on port 8080");
});
