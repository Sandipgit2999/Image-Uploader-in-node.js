const express = require("express");
const multer = require("multer");
const app = express();
const port = 8080;

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + ".jpg");
    },
  }),
}).single("user_file");
app.use(express.json());

app.post("/upload", upload, function (req, res) {
  console.log(req.body);
  res.send("file uploaded");
});
app.get("/upload", function (req, res) {
  res.send("welcome to upload");
});
app.listen(port, () => {
  console.log("server started on port 8080");
});
//alll the
