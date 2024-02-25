const express = require('express');
const app = express();

// Define a route pattern with a regular expression to match language codes
app.get(/^\/(en|es|fr)\/?$/, (req, res) => {
    const lang = req.params[0]; // Extract the matched language code from the URL
    switch (lang) {
        case 'en':
            res.send('Welcome to the English version of the website!');
            break;
        case 'es':
            res.send('¡Bienvenido a la versión en español del sitio web!');
            break;
        case 'fr':
            res.send('Bienvenue sur la version française du site web!');
            break;
        default:
            res.status(404).send('Page not found');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
