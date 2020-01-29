const fs = require("fs");

fs.writeFile("uwu.md", "#Hola, soy Iván. 🦊", function(err) {
  if (err) {
    console.log("Error");
  } else {
    console.log("The file has been saved!");
  }
});
