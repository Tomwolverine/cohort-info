const app = require('./app')
const port = parseInt(process.env.PORT || 6000);

app.listen(port,() => {
    console.log(`I am listening on ${port}`)
})