const express = require("express");

const app = express();
const port = 8080;

app.use(express.json());

let arr = [1, 2];
console.log(typeof arr);
//console.log(upload);

const validator = (req, res, next) => {
  console.log(req.body);
  if (req.method === "POST") {
    const payload = req.body;
    if (
      payload.id &&
      payload.name &&
      payload.rating &&
      payload.description &&
      payload.genre &&
      payload.cast
    ) {
      if (
        typeof payload.id === "number" &&
        typeof payload.name === "string" &&
        typeof payload.rating === "number" &&
        typeof payload.description === "string" &&
        typeof payload.genre === "string" &&
        typeof payload.cast === "object"
      ) {
        next();
      } else {
        res.send("Validation failed 1");
      }
    } else {
      res.send("Validation failed 2");
    }
  } else {
    next();
  }
};

const timeLogger = (req, res, next) => {
  const startTime = new Date().getTime();
  console.log(startTime);
  next();
  const endTime = new Date().getTime();
  console.log(endTime);
  console.log(endTime - startTime);
};

//app.use(timeLogger);

app.get("/user", (req, res) => {
  res.send("this is users page");
});

app.post("/movies", validator, (req, res) => {
  console.log("req body", req.body);
  res.send("data added successfully");
});

app.listen(port, () => {
  console.log("server started on port 8080");
});
