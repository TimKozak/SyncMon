// Default import of express module without Webpack
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

// Initialize express application
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use("/api/syncs", require("./routes/syncs"));
app.use("/api/auth", require("./routes/auth"));
