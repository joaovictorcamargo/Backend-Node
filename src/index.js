const express = require('express');

const app = express();

app.get("/", (request, response) => {
    return response.send("Hello Word")
})

app.listen(3333);