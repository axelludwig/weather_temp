const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/chiasse', (req, res) => {
    console.log('chiasse reçue 5 sur 5')
    res.json({
        "chiasse": 'true'
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})