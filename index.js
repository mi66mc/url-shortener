const express = require('express')
const connectDB = require('./config/db')

const app = express()

connectDB()

app.use(express.json({
    extented: false
}))

app.get('/', function(req, res){
    res.sendfile('html/index.html')
});

app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))
app.use('/api/all', require('./routes/all'))

app.get('*', function(req, res) {
    res.status(404)
    res.sendfile('html/404.html')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})