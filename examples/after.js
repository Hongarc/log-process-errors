#!/usr/bin/env node
// Demonstrates how process errors look when `log-process-errors` is used,
// in JavaScript.
// This file can be directly run:
//   - first install `log-process-errors`
//   - then `node node_modules/log-process-errors/examples/after.js`
// An online demo is also available at:
//   https://repl.it/@ehmicky/log-process-errors

'use strict'

// Ignore the following line: this is only needed for internal purposes.
// eslint-disable-next-line import/no-unassigned-import
require('./utils')

const logProcessErrors = require('log-process-errors')

// Initialization
logProcessErrors()

const {
  uncaughtException,
  unhandledRejection,
  warning,
  multipleResolves,
} = require('./errors')

// Emit different types of process errors.
uncaughtException()
unhandledRejection()
warning()
multipleResolves()
