const express = require("express");
const port = 3000;
const app = express();
const path = require("path");

app.use(express.static("./browser"));
app.get("/", (req, res) => res.sendFile(path.resolve("./browser/index.html")));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
