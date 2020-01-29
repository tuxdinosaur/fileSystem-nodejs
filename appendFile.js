const fs = require("fs");

fs.appendFile("message.txt", "\ndata to append owo", err => {
  if (err) {
    console.log("error");
  } else {
    console.log("The data to append was appended to file!");
  }
});
