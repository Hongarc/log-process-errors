'use strict'

const { LEVELS } = require('./level')

const prettify = function({
  message,
  eventName,
  level,
  colors,
  colors: { bold, dim, inverse, italic },
}) {
  const [explanation, firstLine, ...lines] = message.split('\n')

  // Add color, sign and `eventName` to first message line, and concatenate
  // `firstLine`
  const { COLOR, SIGN } = LEVELS[level]
  const header = colors[COLOR](
    `${inverse(
      bold(` ${SIGN}  ${eventName}${italic(explanation)} `),
    )} ${firstLine}`,
  )

  // Add gray color and indentation to other lines.
  const linesA = lines.map(line => dim(`${INDENT}${line}`))

  const messageA = [header, ...linesA].join('\n')
  return messageA
}

const INDENT_SIZE = 4
const INDENT = ' '.repeat(INDENT_SIZE)

module.exports = {
  prettify,
}