import PostsService from "../../utils/posts.service";
import BlogPage from "../../views/blog/Blog.page";

const BlogIndex = (props) => {
  return <BlogPage {...props} />;
};

export async function getStaticProps() {
  const posts = await PostsService.getPosts();
  return {
    props: {
      posts
    }
  }
}

export default BlogIndex;
