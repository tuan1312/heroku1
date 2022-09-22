const http = require("http")
const port = process.env.port || 3000

const app = http.createServer((req, res) => {
    res.write("<h1>hrllasdisiski</h1")
    res.write("<h3>15156565555</h3>")
    res.end();
})
app.listen(port)