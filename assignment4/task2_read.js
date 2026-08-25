const fs = require("fs");

fs.readFile("student.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file");
        return;
    }

    console.log("Student Information:");
    console.log(data);
});