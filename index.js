const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
require("dotenv").config();

const { User } = require("./models/User");
// application / x-www-form-urlencoded 분석
app.use(bodyParser.urlencoded({ extended: true }));
// aplication/json 분석
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

app.post("/register", (req, res) => {
  // 회원 가입 할때 필요한 정보들을 client에서 가져오고
  // 데이터베이스에 넣어줌
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  }); // 정보들이 유저 모델에 저장
});

app.listen(port, () => console.log(`app listening on port ${port}`));
