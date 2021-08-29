import fs from "fs";
import path from "path";

export default class MdxUtil {

  static getDocs(dir, filesToIgnore) {
    const fileNames = fs.readdirSync(dir);
    const sanitized = fileNames.map((file => path.parse(file).name));

    for (const fileToIgnore of filesToIgnore) {
      const loc = fileNames.indexOf(fileToIgnore);
      if (loc >= 0) {
        sanitized.splice(loc, 1);
      }
    }

    return sanitized;
  }

  static getMdxNames(dir) {
    const files = fs.readdirSync(dir);
    const mdxFiles = files.filter(file => path.parse(file).ext === '.mdx');
    return mdxFiles.map(file => path.parse(file).name);
  }
}
