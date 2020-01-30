const fs = require("fs");

function removeDirAndFiles(path = "") {
  fs.readdir(path, (err, files) => {
    if (err) throw err;
    if (files.length > 0) {
      files.forEach(value => {
        fs.unlink(`${path}/${value}`, err => {
          if (err) throw err;
          console.log(`${value} was deleted`);
        });
      });
    }
    fs.rmdir(path, err => {
      if (err) throw err;
      console.log("Removed directory: " + path);
    });
  });
}

removeDirAndFiles("newFolder2");
