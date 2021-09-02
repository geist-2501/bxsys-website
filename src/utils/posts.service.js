import MdxUtil from "./mdx.util";


export default class PostsService {

  static async getPosts() {
    const filenames = MdxUtil.getMdxNames('src/pages/blog');
    let postMetas = [];
    for (const filename of filenames) {
      try {
        const post = await import(`../pages/blog/${filename}.mdx`);
        const postMeta = post.meta;
        postMeta.name = filename;
        postMetas.push(postMeta);
      }
      catch (e) {
        // Ignore and continue.
        console.error(e);
      }
    }

    return postMetas;
  }

}
