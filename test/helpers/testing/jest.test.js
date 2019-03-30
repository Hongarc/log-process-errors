// eslint-disable-next-line filenames/match-regex
'use strict'

const { EVENTS } = require('../emit')

const { callMain } = require('./main')

const name = callMain()

// eslint-disable-next-line no-undef
describe('should make test fail', () => {
  // eslint-disable-next-line no-undef
  test(`on ${name}`, () => {
    // eslint-disable-next-line no-empty-function, max-nested-callbacks
    EVENTS[name]().catch(() => {})
  })
})
