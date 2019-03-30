// Meant to be performed as `node -r log-process-errors/register/jest`
// or `require('log-process-errors/register/jest')`.
'use strict'

const logProcessErrors = require('./main')

logProcessErrors({ testing: 'jest' })
