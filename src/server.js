// const express = require("express")
// const app = express()
require("dotenv").config()
const app = require("./config/config")

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`puerto en ${PORT}`))
app.on("error", (error)=> console.log(error.message))
