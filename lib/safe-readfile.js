var fs = require('fs')

exports.readFile = readFile
exports.readFileSync = readFileSync

function readFile (filename, options, callback) {
  if (callback) {
    fs.readFile(filename, options, function (err, data) {
      if (err && err.code === 'ENOENT') callback(null, '')
      else callback(err, data)
    })
  } else {
    process.nextTick(function () {
      var read = readFileSync(filename, (callback ? options : undefined))
        , callback = callback || options
      if (callback) callback(null, read)
    })
  }
}

function readFileSync (filename, options) {
  try {
    var read = fs.readFileSync(filename, options)
    return read === undefined ? '' : read
  } catch (err) {
    if (err.code !== 'ENOENT') throw err
  }
}

