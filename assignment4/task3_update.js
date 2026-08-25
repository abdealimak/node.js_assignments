const fs = require("fs");

const extraInfo = `Experience: 1 Year
City: Mumbai
`;

fs.appendFile("student.txt", extraInfo, (err) => {
    if (err) {
        console.log("Error updating file");
        return;
    }

    console.log("Student information updated successfully");

    fs.readFile("student.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error reading updated file");
            return;
        }

        console.log("\nUpdated Student Information:");
        console.log(data);
    });
});