const fs = require("fs");

fs.readdir("./newFolder", (error, files) => {
  if (error) {
    console.error("Error");
    return;
  }
  console.log(`Aquí hay: ${files}`);
});
