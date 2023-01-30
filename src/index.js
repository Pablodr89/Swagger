'use strict'

let app = require('./js/app')
let port = 8000
let { swaggerDocs: SwaggerDocs } = require("./swagger.js");

app.listen(port, () => {
    console.log(`El servidor está corriendo en localhost: ${port}`)
    SwaggerDocs(app, port)
})
    

