'use strict'

const assert = require('assert')
const safeReadFile = require('.').readFile
const safeReadFileSync = require('.').readFileSync

/* global it */

it('readFile with existent file', () => {
  assert(safeReadFileSync('./test.js', 'utf8').startsWith('\'use strict\''))
})

it('readFile with non-existent file', () => {
  assert.equal(safeReadFileSync('non-existent'), undefined)
})

it('readFileSync with existent file', (done) => {
  safeReadFile('./test.js', 'utf8', (err, data) => {
    assert.ifError(err)
    assert(data.startsWith('\'use strict\''))
    done()
  })
})

it('readFileSync with non-existent file', (done) => {
  safeReadFile('non-existent', (err, data) => {
    assert.ifError(err)
    assert.equal(data, undefined)
    done()
  })
})
