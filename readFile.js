const fs = require("fs");

fs.readFile("./uwu.md", "UTF-8", (err, data) => {
  if (err) {
    console.log("error");
  } else {
    console.log("El archivo dice:", data);
  }
});
