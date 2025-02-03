const fs = require('fs').promises;
const path = require('path');

async function readDir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    if (/\.git/g.test(fileFullPath)) continue;

    if (/node_modules/g.test(fileFullPath)) continue;

    if (stats.isDirectory()) {
      readDir(fileFullPath);
      continue;
    }

    console.log('file: ' + file);
  }
}

readDir('/home/erikarch/JsProjects/js-course/');

