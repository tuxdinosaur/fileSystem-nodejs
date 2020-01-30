const fs = require("fs");

function rmDirAsync(path = "") {
  fs.readdir(path, (error, fileNames) => {
    if (error) {
      console.log(`No se pudo leer la carpeta: ${path}`);
      return;
    }
    fileNames.forEach(fileName => {
      fs.unlink(`${path}/${fileName}`, () => {
        fs.readdir(path, (errorNestedReadDir, files) => {
          if (errorNestedReadDir) {
            console.log(`No se pudo leer la carpeta: ${path}`);
            return;
          }
          if (files.length <= 0) {
            fs.readdir(path, errorRmDir => {
              if (errorRmDir) {
                console.log(`Error al borrar: ${path}`);
                return;
              }
              console.log(`${path} borrado`);
            });
          }
        });
      });
    });
  });
}

rmDirAsync("newFolder2");
