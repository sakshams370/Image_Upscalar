const express = require("express");
const app = express();
app.get("/", function(request, response) {
    response.sendFile(home.html);
});
app.listen(3000, function() {
    console.log("Server has Started");
});