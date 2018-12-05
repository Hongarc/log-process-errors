'use strict'

const { init } = require('.')

// Logging init is automatically performed by
// `node -r log-process-errors/register` or
// `require('log-process-errors/register')`.
// It encourages using `node -r` to prevent from adding this helper in the
// source code. This is beneficial in the following use cases:
//  - when using it for debugging purpose only
//  - discouraging libraries from shipping this code, as it mutates global
//    environment. This could lead to unexpected side-effects when requiring
//    the library, and to conflicts between libraries.
// Also it ensures this code is called as early as possible, to make sure early
// events are caught.
// To either defer the call or to pass options, one must use instead
// `require('log-process-errors').init(options)`
init()
