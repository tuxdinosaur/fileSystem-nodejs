const fs = require("fs");

fs.readFile("./message.txt", "UTF-8", (err, data) => {
  if (err) {
    console.log("error");
  }
  console.log("El archivo dice:", data);
});
