# :file_folder: safe `readFile`
    
[![dependencies](https://david-dm.org/tallesl/safe-readfile.png)](https://david-dm.org/tallesl/safe-readfile)
[![devDependencies](https://david-dm.org/tallesl/safe-readfile/dev-status.png)](https://david-dm.org/tallesl/safe-readfile#info=devDependencies)
[![npm module](https://badge.fury.io/js/safe-readfile.png)](http://badge.fury.io/js/safe-readfile)

[![npm](https://nodei.co/npm/safe-readfile.png?mini=true)](https://nodei.co/npm/safe-readfile/)
    
A version of `fs.readFile` and `fs.readFileSync` that doesn't raise *ENOENT*.

Returns `undefined` if the file doesn't exist and `''` if the file exists and it's empty.

## Usage

```javascript
$ npm install safe-readfile
safe-readfile@1.0.0 node_modules/safe-readfile
$ node
> var safeReadFile = require('safe-readfile').readFile
undefined
> safeReadFile('nonexistent') // fs.readFile would throw ENOENT
undefined
```
