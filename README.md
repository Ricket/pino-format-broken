pino-format-broken
==================

Tiny app to demonstrate that pino-pretty's messageFormat is not working.

Tested with node v12.16.3 (npm v6.14.4)

If you have nvm installed:
```
nvm exec npm install
nvm exec node index.js
```

Otherwise:
```
npm install
node index.js
```

Observe that the log messages are not formatted, despite specifying
messageFormat.

