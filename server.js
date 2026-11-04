
const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Movie Review Blog</title>
        <style>
            body {
                background-color: #222;
                color: white;
                font-family: Arial;
                text-align: center;
                margin: 0;
            }

            h1 {
                background-color: red;
                padding: 25px;
            }

            .movie {
                background-color: #444;
                margin: 20px auto;
                padding: 20px;
                width: 60%;
                border-radius: 10px;
            }

            h2 {
                color: yellow;
            }
        </style>
    </head>

    <body>

        <h1>Movie Review Blog</h1>
        <h2>Welcome to Our Movie Review Website</h2>

        <div class="movie">
            <h2>Leo</h2>
            <p>Genre: Action Thriller</p>
            <p>Rating: 8.5/10</p>
            <p>A fantastic action movie with an interesting story.</p>
        </div>

        <div class="movie">
            <h2>Vikram</h2>
            <p>Genre: Action Thriller</p>
            <p>Rating: 9/10</p>
            <p>An excellent movie with amazing performances.</p>
        </div>

        <div class="movie">
            <h2>Master</h2>
            <p>Genre: Action Drama</p>
            <p>Rating: 8/10</p>
            <p>An entertaining movie with great action scenes.</p>
        </div>

        <p>Request URL: ${req.url}</p>
        <p>Request Method: ${req.method}</p>

    </body>
    </html>
    `;

    res.end(html);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
