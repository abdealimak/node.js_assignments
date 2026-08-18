const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url == "/") {

        res.end(`
            <h1>Home</h1>
            <p>Welcome to my portfolio.</p>

            <a href="/">Home</a>
            <a href="/about">About Me</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        `);

    } else if (req.url == "/about") {

        res.end(`
            <h1>About Me</h1>
            <p>My name is Abdeali Makda.</p>

            <a href="/">Home</a>
            <a href="/about">About Me</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        `);

    } else if (req.url == "/skills") {

        res.end(`
            <h1>Skills</h1>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>

            <a href="/">Home</a>
            <a href="/about">About Me</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        `);

    } else if (req.url == "/projects") {

        res.end(`
            <h1>Projects</h1>
            <p>Student Portal</p>
            <p>Portfolio Website</p>

            <a href="/">Home</a>
            <a href="/about">About Me</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        `);

    } else if (req.url == "/contact") {

        res.end(`
            <h1>Contact Details</h1>
            <p>Name: Abdeali Makda</p>
            <p>Email: abdealimac@gmail.com</p>

            <a href="/">Home</a>
            <a href="/about">About Me</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        `);

    } else {

        res.end("404 - Page Not Found");

    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});