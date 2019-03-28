# Snapshot report for `test/testing.js`

The actual snapshot is saved in `testing.js.snap`.

Generated by [AVA](https://ava.li).

## [ava] [multipleResolves] should allow overriding 'opts.level'

> Snapshot 1

    {
      code: 0,
      stderr: '',
      stdout: `√ should make tests fail on multipleResolves␊
      ␊
        1 test passed`,
    }

## [ava] [multipleResolves] should make tests fails

> Snapshot 1

    {
      code: 1,
      stderr: '',
      stdout: `√ should make tests fail on multipleResolves␊
      ␊
        Uncaught exception in build/test/ava.js␊
      ␊
      ␊
        Error:  ×  multipleResolves (a promise was resolved/rejected multiple times)  Initially resolved with: { success: true }␊
            Then rejected with: Error: message␊
                at STACK TRACE␊
      ␊
        × build/test/ava.js exited with a non-zero exit code: 1␊
      ␊
        1 test passed␊
        1 uncaught exception`,
    }

## [ava] [multipleResolves] should work with the -r flag

> Snapshot 1

    {
      code: 1,
      stderr: '',
      stdout: `√ should make tests fail on multipleResolves␊
      ␊
        Uncaught exception in build/test/ava.js␊
      ␊
      ␊
        Error:  ×  multipleResolves (a promise was resolved/rejected multiple times)  Initially resolved with: { success: true }␊
            Then rejected with: Error: message␊
                at STACK TRACE␊
      ␊
        × build/test/ava.js exited with a non-zero exit code: 1␊
      ␊
        1 test passed␊
        1 uncaught exception`,
    }

## [ava] [rejectionHandled] should allow overriding 'opts.level'

> Snapshot 1

    {
      code: 1,
      stderr: '',
      stdout: `√ should make tests fail on rejectionHandled␊
      ␊
        Unhandled rejection in build/test/ava.js␊
      ␊
      ␊
        Error: message␊
      ␊
      ␊
        1 test passed␊
        1 unhandled rejection`,
    }

## [ava] [rejectionHandled] should make tests fails

> Snapshot 1

    {
      code: 1,
      stderr: '',
      stdout: `√ should make tests fail on rejectionHandled␊
      ␊
        Unhandled rejection in build/test/ava.js␊
      ␊
      ␊
        Error: message␊
      ␊
        Uncaught exception in build/test/ava.js␊
      ␊
      ␊
        Error:  ×  rejectionHandled (a promise was rejected and handled too late)  Error: message␊
                at STACK TRACE␊
      ␊
        × build/test/ava.js exited with a non-zero exit code: 1␊
      ␊
        1 test passed␊
        1 unhandled rejection␊
        1 uncaught exception`,
    }

## [ava] [rejectionHandled] should work with the -r flag

> Snapshot 1

    {
      code: 1,
      stderr: '',
      stdout: `√ should make tests fail on rejectionHandled␊
      ␊
        Unhandled rejection in build/test/ava.js␊
      ␊
      ␊
        Error: message␊
      ␊
        Uncaught exception in build/test/ava.js␊
      ␊
      ␊
        Error:  ×  rejectionHandled (a promise was rejected and handled too late)  Error: message␊
                at STACK TRACE␊
      ␊
        × build/test/ava.js exited with a non-zero exit code: 1␊
      ␊
        1 test passed␊
        1 unhandled rejection␊
        1 uncaught exception`,
    }

## [ava] [uncaughtException] should allow overriding 'opts.level'

> Snapshot 1

    {
      code: 1,
      stderr: '',
      stdout: `√ should make tests fail on uncaughtException␊
      ␊
        Uncaught exception in build/test/ava.js␊
      ␊
      ␊
        Error: message␊
      ␊
        × build/test/ava.js exited with a non-zero exit code: 1␊
      ␊
        1 test passed␊
        1 uncaught exception`,
    }

## [ava] [uncaughtException] should make tests fails

> Snapshot 1

    {
      code: 1,
      stderr: '',
      stdout: `√ should make tests fail on uncaughtException␊
      ␊
        Uncaught exception in build/test/ava.js␊
      ␊
      ␊
        Error: message␊
      ␊
        × build/test/ava.js exited with a non-zero exit code: 1␊
      ␊
        1 test passed␊
        1 uncaught exception`,
    }

## [ava] [uncaughtException] should work with the -r flag

> Snapshot 1

    {
      code: 1,
      stderr: '',
      stdout: `√ should make tests fail on uncaughtException␊
      ␊
        Uncaught exception in build/test/ava.js␊
      ␊
      ␊
        Error: message␊
      ␊
        × build/test/ava.js exited with a non-zero exit code: 1␊
      ␊
        1 test passed␊
        1 uncaught exception`,
    }

## [ava] [unhandledRejection] should allow overriding 'opts.level'

> Snapshot 1

    {
      code: 1,
      stderr: '',
      stdout: `√ should make tests fail on unhandledRejection␊
      ␊
        Unhandled rejection in build/test/ava.js␊
      ␊
      ␊
        Error: message␊
      ␊
      ␊
        1 test passed␊
        1 unhandled rejection`,
    }

## [ava] [unhandledRejection] should make tests fails

> Snapshot 1

    {
      code: 1,
      stderr: '',
      stdout: `√ should make tests fail on unhandledRejection␊
      ␊
        Unhandled rejection in build/test/ava.js␊
      ␊
      ␊
        Error: message␊
      ␊
      ␊
        1 test passed␊
        1 unhandled rejection`,
    }

## [ava] [unhandledRejection] should work with the -r flag

> Snapshot 1

    {
      code: 1,
      stderr: '',
      stdout: `√ should make tests fail on unhandledRejection␊
      ␊
        Unhandled rejection in build/test/ava.js␊
      ␊
      ␊
        Error: message␊
      ␊
      ␊
        1 test passed␊
        1 unhandled rejection`,
    }

## [ava] [warning] should allow overriding 'opts.level'

> Snapshot 1

    {
      code: 0,
      stderr: '',
      stdout: `√ should make tests fail on warning␊
      ␊
        1 test passed`,
    }

## [ava] [warning] should make tests fails

> Snapshot 1

    {
      code: 1,
      stderr: '',
      stdout: `√ should make tests fail on warning␊
      ␊
        Uncaught exception in build/test/ava.js␊
      ␊
      ␊
        Error:  ×  warning  (500) Detail␊
            Error: message␊
                at STACK TRACE␊
      ␊
        × build/test/ava.js exited with a non-zero exit code: 1␊
      ␊
        1 test passed␊
        1 uncaught exception`,
    }

## [ava] [warning] should work with the -r flag

> Snapshot 1

    {
      code: 1,
      stderr: '',
      stdout: `√ should make tests fail on warning␊
      ␊
        Uncaught exception in build/test/ava.js␊
      ␊
      ␊
        Error:  ×  warning  (500) Detail␊
            Error: message␊
                at STACK TRACE␊
      ␊
        × build/test/ava.js exited with a non-zero exit code: 1␊
      ␊
        1 test passed␊
        1 uncaught exception`,
    }