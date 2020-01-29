const fs = require("fs");

// Assuming that 'path/file.txt' is a regular file.
fs.unlink("destination.txt", err => {
  if (err) {
    console.log("error");
  } else {
    console.log("file was deleted");
  }
});
