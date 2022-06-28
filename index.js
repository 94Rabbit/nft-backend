// Add Express
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser")
let _code;
let _phone;
let _userId;
// Initialize Express
const app = express();

// set cors domain list
app.use(cors({
    origin: [
      'http://localhost:3000',
      'https://skosi-2iaaa-aaaad-qcpva-cai.ic.fleek.co'
    ]
}));

// parse post body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create GET request
app.get("/", (req, res) => {
  res.send({
      data: 'from express server!'
  });
});

// get verification code
app.get('/getVerificationCode', (req,res)=> {
  // mock 随机6位数验证码
  const { phone } = req.query;
  _phone = phone; // 当前登录的手机号
  _code = Math.random().toFixed(6).slice(-6);
  res.json({
    code:_code
  });
});

// Sign up or Sign in
app.post('/login',(req,res)=>{
  const { code, phone } = req.body;
  console.log(code, phone);
  // if(code === _code && phone === _phone){
  //   res.json({
  //     success: true,
  //     msg: '登录成功',
  //     token: '12345678',
  //     userInfo: {
  //       wallet: '0xsdasa23fahshs',
  //       name: `收藏家${Math.random().toFixed(3)}`,
  //       avatar: 'https://i01piccdn.sogoucdn.com/be550b6bf45fd8ad'
  //     }
  //   });
  // } else {
  //   res.json({
  //     success: false,
  //     msg: '登录失败',
  //     code,
  //     phone,
  //   });
  // }
  res.json({
    success: true,
    msg: '登录成功',
    token: '12345678',
    userInfo: {
      wallet: '0xsdasa23fahshs',
      name: `收藏家${Math.random().toFixed(3)}`,
      avatar: 'https://i01piccdn.sogoucdn.com/be550b6bf45fd8ad'
    }
  });
});

// get user info
app.get('/getUserInfo', (req,res)=> {
  res.json({
    success: true,
    msg: '获取成功',
    userInfo: {
      wallet: '0xsdasa23fahshs',
      name: `收藏家${Math.random().toFixed(3)}`,
      avatar: 'https://i01piccdn.sogoucdn.com/be550b6bf45fd8ad'
    }
  });
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;