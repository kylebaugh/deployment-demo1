const express = require('express')
const path = require('path')

const app = express()
//no express.json since we aren't passing data from front-back end

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"))
})

const port = process.env.PORT || 4004

app.listen(port, () => console.log(`Take us to warp ${port}`))