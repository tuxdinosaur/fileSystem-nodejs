const fs = require("fs");

fs.appendFile("message.txt", "\ndata to append owo", err => {
  if (err) throw err;
  console.log('The "data to append owo" was appended to file!');
});
