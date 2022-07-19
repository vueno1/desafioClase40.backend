const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const exphbs = require("express-handlebars")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const MongoStore = require("./mongodb")
require("./mongodb")
const productoRouter = require("../routes/product.route")
const messageRouter = require("../routes/message.route")

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true })) 

app.set('views', path.join(path.dirname(''), '../views') )
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(cookieParser())
app.use(session({
    store: MongoStore,
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use("/", productoRouter, messageRouter)

module.exports = app