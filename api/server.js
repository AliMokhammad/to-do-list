require("./env");
const path = require("path");
const express = require("express");
const userRoutes = require("./routes/user");
const todoRoutes = require("./routes/todo");
const bodyParser = require("body-parser");
const { checkAuth } = require("./utils/middleware");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/api/todos", checkAuth, todoRoutes);
app.use("/", express.static(path.join(__dirname, "..", "web", "build")));

const PORT = process.env.PORT || 5511;
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
