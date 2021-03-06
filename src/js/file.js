var fs = require('fs')

exports.readFile = function (file, callback) {
  fs.readFile(file, function (err, data) {
    if (err) {
      callback(err)
    } else {
      callback(null, data)
    }
  })
}

exports.writeFile = function (file, data, callback) {
  fs.writeFile(file, data, function (err) {
    if (err) {
      return callback(err)
    }
    callback(null)
  })
}

exports.getItemById = function (array, id) {
  return array.find(function (item) {
    return item.id === parseInt(id)
  })
}