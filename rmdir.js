const fs = require("fs");

fs.rmdir("./newFolder2", error => {
  if (error) {
    console.error("Error");
    return;
  }
  console.log("Se borró la carpeta");
});
