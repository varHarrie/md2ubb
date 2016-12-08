# md2ubb

Simple script for conversion from markdown to ubb.

## Usage

```bash
  # install as global module
  npm install -g md2ubb
  # ouput to output.txt
  md2ubb test.md output.txt
  # output to console
  md2ubb test.md

  # install as dependencies
  npm install --save md2ubb
```

```javascript
  var convert = require('md2ubb')
  var ubb = convert('### Title')
  console.log(ubb)
```
