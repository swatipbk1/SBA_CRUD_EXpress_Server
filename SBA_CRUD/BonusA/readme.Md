Express Language Router
This is a simple Express.js server that handles requests with URLs containing language codes (en, es, fr) as part of the path. It uses regular expressions in route paths to match these language codes and responds with language-specific messages.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/express-language-router.git
Navigate to the project directory:

bash
Copy code
cd express-language-router
Install dependencies:

bash
Copy code
npm install
Usage
Start the server:

bash
Copy code
npm start
Open Thunder Client or any other HTTP client of your choice.

Send GET requests to the following URLs:

http://localhost:3000/en (English)
http://localhost:3000/es (Spanish)
http://localhost:3000/fr (French)
Verify that you receive language-specific messages in the responses.

Routes
/en: English version of the website.
/es: Spanish version of the website.
/fr: French version of the website.
License
This project is licensed under the MIT License - see the LICENSE file for details.
