let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let session = require('express-session');
// 8000 -> 3000 跨域
app.listen(3000);
app.use(session({
    resave:true,
    secret:'zfpx',// 签名 看一下发过来的是否合法
    saveUninitialized:true //每次一连接服务端 就给你发一个cookie
}));
app.use(bodyParser.json()); // 表示格式化json对象放到req.body上
app.use(cors());
let sliders = require('./sliders');
// http://localhost:3000/slider
app.get('/slider', function (req, res) {
    res.json(sliders);
});
// http://localhost:3000/list?offset=5&limit=10&type=0




let userList = [];
// 登录成功后 {error:0,msg:'登录成功了',user:'xxxx'}
// 登录失败后 {error:1,msg:'用户密码不正确',user:null}
app.post('/login', function (req, res) {
    let { username, password } = req.body;
    console.log(req.body)
    let user = userList.find(user => user.username === username&&user.password === password);
    if(user){
        req.session.user = username; //保存当前用户的信息
        res.json({ error: 0, msg: '登录成功了', user: username  })
    }else{
        res.json({ error: 1, msg: '用户密码不正确', user: null });
    }
});
// 注册成功后 {error:0,msg:'注册成功',user:null}
// 注册失败后 {error:1,msg:'用户已经注册过了',user:null}
app.post('/reg',function(req,res) {
    let {username,password} = req.body;
    let user = userList.find(user=>user.username === username);
    console.log(user);
    if(user){
        res.json({ error: 1, msg: '用户已经注册过了',user:null });
    }else{
        userList.push(req.body);
        res.json({ error: 0, msg: '注册成功', user: null });
    }
});

app.get('/validate',function (req,res) {
    if(req.session.user){
        res.json({msg:'',error:0,user:req.session.user})
    }else {
        res.json({msg:'',error:0,user:null})
    }
});





function cors() {
    return function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:8000");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Credentials',true)
        next();
    }
}