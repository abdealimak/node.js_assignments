const fs = require("fs");

fs.unlink("studentDetails.txt", (err) => {
    if (err) {
        console.log("Error deleting file");
        return;
    }

    console.log("studentDetails.txt deleted successfully");
});