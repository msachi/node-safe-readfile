# safe-readfile

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][npm-img]][npm]
    
A version of [fs.readFile] and [fs.readFileSync] that doesn't raise `ENOENT`.  
Returns `undefined` if the file doesn't exist and `''` if the file exists and it's empty.
    
[build]:               https://travis-ci.org/tallesl/node-safe-readfile
[build-img]:           https://travis-ci.org/tallesl/node-safe-readfile.svg
[coverage]:            https://coveralls.io/r/tallesl/node-safe-readfile?branch=master
[coverage-img]:        https://coveralls.io/repos/tallesl/node-safe-readfile/badge.svg?branch=master
[dependencies]:        https://david-dm.org/tallesl/node-safe-readfile
[dependencies-img]:    https://david-dm.org/tallesl/node-safe-readfile.svg
[devdependencies]:     https://david-dm.org/tallesl/node-safe-readfile#info=devDependencies
[devDependencies-img]: https://david-dm.org/tallesl/node-safe-readfile/dev-status.svg
[npm]:                 https://npmjs.com/package/safe-readfile
[npm-img]:             https://badge.fury.io/js/safe-readfile.svg
[fs.readFile]:         https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback
[fs.readFileSync]:     https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options

## Usage

```js
$ npm install safe-readfile
(...)
$ node
> var safeReadFile = require('safe-readfile').readFile
undefined
> safeReadFile('nonexistent') // fs.readFile would throw ENOENT
undefined
```
