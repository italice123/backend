const express = require("./config/express");
const app = express();

const server = app.listen(8080, "localhost", () => {
    const port = server.address().port;
    const hostname = server.address().address;
    console.log(`Server running at ${hostname}:${port}`);
})