const fs = require("fs");

// Assuming that 'path/file.txt' is a regular file.
fs.unlink("destination.txt", err => {
  if (err) throw err;
  console.log("message.txt was deleted");
});
