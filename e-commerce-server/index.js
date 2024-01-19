const app = require("./app")
const { serverPort } = require("./secret")

app.listen(serverPort, (req, res) => {
    console.log(`E-commerce project running at http://localhost:${serverPort}`)
})