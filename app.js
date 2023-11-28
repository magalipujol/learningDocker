var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// Serve static files (like your HTML) from the "public" directory
app.use(express.static(path.join(__dirname, "public")));
var names = ["Peco", "Peke", "Pecos", "Quepe", "Quepos"];

app.get("/names", (req, res, next) => {
    res.json(names);
});

app.delete("/names/:name", (req, res, next) => {
    const nameToDelete = req.params.name;
    console.log(nameToDelete);
    const index = names.indexOf(nameToDelete);
    if (index !== -1) {
        names.splice(index, 1);
        res.json({ message: "Name deleted successfully", names });
    } else {
        res.status(404).json({ message: "Name not found" });
    }
});

app.post("/names", (req, res, next) => {
    const newName = req.body.name;
    if (newName) {
        names.push(newName);
        res.json({ message: "Name added successfully", names });
    } else {
        res.status(400).json({ message: "Invalid request. Please provide a name in the request body." });
    }
});


// Catch-all route to serve your HTML file
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
