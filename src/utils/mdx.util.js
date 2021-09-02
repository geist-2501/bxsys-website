import fs from "fs";
import path from "path";

export default class MdxUtil {

  static getMdxNames(dir) {
    const files = fs.readdirSync(dir);
    const mdxFiles = files.filter(file => path.parse(file).ext === '.mdx');
    return mdxFiles.map(file => path.parse(file).name);
  }
}
