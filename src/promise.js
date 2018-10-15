'use strict'

// Retrieve promise's resolved/rejected state and value.
const parsePromise = async function({ eventName, promise, promiseValue }) {
  // `uncaughtException` and `warning` events do not have `promise`.
  if (promise === undefined) {
    return {}
  }

  // `unhandledRejection` should not use the following code because:
  //  - we already know `promiseState` and `promiseValue`
  //  - using `try/catch` will fire `rejectionHandled`
  if (eventName === 'unhandledRejection') {
    return { promiseState: 'rejected', promiseValue }
  }

  // `rejectionHandled` and `multipleResolves` use `await promise`
  try {
    return { promiseState: 'resolved', promiseValue: await promise }
  } catch (error) {
    return { promiseState: 'rejected', promiseValue: error }
  }
}

module.exports = {
  parsePromise,
}
