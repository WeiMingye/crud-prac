/**
 * 路由设计
 * get /students => home page
 * get /students/add => add page
 * post /students/add => add student
 * get /students/eidt => edit page
 * post /students/edit => post edited student
 * get /students/delete => delete student
 */
var express = require('express')
var file = require('./file')

var students = null
var router = express.Router()

// 读取文件的数据
file.readFile('./students.json', function (err, data) {
  if (err) {
    return console.log('Can not read the students.json')
  }
  students = (JSON.parse(data.toString() || '[]'))
})

// 首页
router.get('/', function (req, res) {
  res.redirect('/students')
})

// 学生首页
router.get('/students', function (req, res) {
  res.render('index.html', { students: students })
})

// 添加页面
router.get('/students/add', function (req, res) {
  res.render('add.html')
})

// 提交添加信息
 router.post('/students/add', function (req, res) {
  
 })

//  编辑页面
router.get('/students/edit', function (req, res) {
  res.render('edit.html')
})

// 提交编辑信息
router.post('/students/edit', function (req, res) {

})

// 删除学生
router.get('/students/delete', function (req, res) {
  
})

module.exports = router
