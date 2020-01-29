const fs = require("fs");

fs.writeFile("message.txt", "Hola", function(err) {
  if (err) {
    console.log("Error");
  }
  console.log("The file has been saved!");
});
