const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url == "/student") {

        const student = {
            id: 101,
            name: "Abdeali",
            course: "Btech",
            semester: 3,
            city: "Mumbai"
        };

        res.end(JSON.stringify(student));

    } else {

        res.end("404 - Page Not Found");

    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});