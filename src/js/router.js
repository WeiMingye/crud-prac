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
  // 转换类型
  req.body.id = parseInt(req.body.id)
  req.body.gender = parseInt(req.body.gender)
  // 保存到文件中
  students.push(req.body)
  file.writeFile('./students.json', JSON.stringify(students), function (err) {
    if (err) {
      console.log('Can not write the students.json')
    } else {
      console.log('the student is added')
      res.redirect('/students')
    }
  })
 })

//  编辑页面
router.get('/students/edit', function (req, res) {
  var editItem = file.getItemById(students, req.query.id)
  res.render('edit.html', { student: editItem })
})

// 提交编辑信息
router.post('/students/edit', function (req, res) {

})

// 删除学生
router.get('/students/delete', function (req, res) {
  red.end(req.query.id)
})

module.exports = router
