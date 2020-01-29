const fs = require("fs");

// Assuming that 'path/file.txt' is a regular file.
fs.unlink("message.txt", err => {
  if (err) throw err;
  console.log("message.txt was deleted");
});
