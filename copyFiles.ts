const fs = require("fs").promises;
const path = require("path");

const sourceDir = "./dist";
const destinationDir = "public";

fs.readdir(sourceDir)
  .then((files: any[]) => {
    files.forEach(async (file) => {
      try {
        await fs.copyFile(
          path.join(sourceDir, file),
          path.join(destinationDir, file)
        );
        console.log(`File ${file} copied successfully.`);
      } catch (err) {
        console.error(`Error copying file ${file}:`, err);
      }
    });
  })
  .catch((err: any) => {
    console.error("Error reading source directory:", err);
  });
