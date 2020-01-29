const fs = require("fs");

// destination.txt will be created or overwritten by default.
fs.copyFile("message.txt", "destination.txt", err => {
  if (err) {
    console.log("error");
  } else {
    console.log("message.txt was copied to destination.txt");
  }
});
