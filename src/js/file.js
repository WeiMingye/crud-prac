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