const express = require('express');
const path = require('path');
const app = express();

// Set the path for static files (like CSS)
app.use(express.static(path.join(__dirname, 'public')));