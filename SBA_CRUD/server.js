const express = require('express');
const path = require('path');
const app = express();

// Set the path for static files (like CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route for rendering the latestAlbums.ejs view
app.get('/', (req, res) => {
    // Example static album data
    const albums = [
        { title: "Album 1", artist: "Artist 1", genre: "Rock" },
        { title: "Album 2", artist: "Artist 2", genre: "Pop" },
        // Add more static data as needed
    ];
    res.render('latestAlbums', { albums }); // Render the latestAlbums.ejs view
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
