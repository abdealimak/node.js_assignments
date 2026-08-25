const fs = require("fs");

const student = `Name: Abdeali Makda
Course: Full Stack Development
Technology: Node.js
`;

fs.writeFile("student.txt", student, (err) => {
    if (err) {
        console.log("Error creating file");
        return;
    }

    console.log("student.txt created successfully");
});