var express = require('express')
var bodyParser = require('body-parser')
var router = require('./src/js/router')
var file = require('./src/js/file')

var students = null
var app = express()

// app调用其他模块
app.engine('html', require('express-art-template'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 开放公共资源文件夹
app.use('/src/',express.static('./src/'))

// 引入路由
app.use(router)

// 开启服务器
app.listen(3000, function (err) {
  if (err) {
    console.log('Can not open the file')
  } else {
    console.log('Server is running')
  }
})
