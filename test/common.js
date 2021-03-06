/*
 * This file is part of the xPack distribution
 *   (http://xpack.github.io).
 * Copyright (c) 2019 Liviu Ionescu.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

'use strict'
/* eslint valid-jsdoc: "error" */
/* eslint max-len: [ "error", 80, { "ignoreUrls": true } ] */

// ----------------------------------------------------------------------------

const util = require('util')

// ----------------------------------------------------------------------------

class MockLog {
  constructor () {
    this.lines = []
    this.isDebug = false
  }

  warning (msg = '', ...args) {
    const str = util.format(msg, ...args)
    this.lines.push('warning: ' + str)
  }

  info (msg = '', ...args) {
    const str = util.format(msg, ...args)
    this.lines.push(str)
  }

  debug (msg = '', ...args) {
    const str = util.format(msg, ...args)
    this.lines.push(str)
  }

  trace (msg = '', ...args) {
    const str = util.format(msg, ...args)
    this.lines.push(str)
  }

  clear () {
    this.lines = []
  }
}

// ----------------------------------------------------------------------------
// Node.js specific export definitions.

// By default, `module.exports = {}`.
// The Main class is added as a property to this object.

module.exports.MockLog = MockLog

// In ES6, it would be:
// export class MockLog { ... }
// ...
// import { MockLog } from 'common.js'

// ----------------------------------------------------------------------------
