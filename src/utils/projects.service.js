import MdxUtil from "./mdx.util";

export default class ProjectsService {

  static async getProjects() {
    const filenames = MdxUtil.getMdxNames('src/pages/project');
    let projMetas = [];
    for (const filename of filenames) {
      try {
        const projMeta = (await import(`../pages/project/${filename}.mdx`)).meta;
        projMeta.name = filename;
        projMetas.push(projMeta);
      }
      catch (e) {
        // Ignore and continue.
        console.error(e);
      }
    }

    return projMetas;
  }
}
