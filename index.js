const log = require('pino')({
  prettyPrint: {
    messageFormat: '{level} {time} {foo} {msg}'
  }
})

log.info('hello world')

const child = log.child({ foo: 'bar' })
child.info('asdf')

