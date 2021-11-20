const express = require('express')
const next = require('next')

const app = next({ dev: false })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    const PORT = process.env.PORT || 5000

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:' + PORT)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
