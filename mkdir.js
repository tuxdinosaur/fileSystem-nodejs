const fs = require("fs");

fs.mkdir("./newFolder2", error => {
  if (error) {
    console.error("Error");
    return;
  }
  console.log("Carpeta creada");
});
