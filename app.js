var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// app调用其他模块
app.engine('html', require('express-art-template'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 开放公共资源文件夹
app.use('/src/',express.static('./src/'))

// 引入路由
app.get('/', function (req, res) {
  res.render('index.html')
})

app.listen(3000, function (err) {
  if (err) {
    console.log('Can not open the file')
  } else {
    console.log('Server is running')
  }
})
