const express = require("express");
const router = require("./routes");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);

app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(PORT, () => {
	console.log(`App is listening on http://localhost:${PORT}`);
});
