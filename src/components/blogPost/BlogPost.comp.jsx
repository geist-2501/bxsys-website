import React from 'react';

const BlogPost = ({meta, children}) => {
  return (
    <div>
      <h1>This is a blog post</h1>
      <h5>Published: {meta.date}</h5>
      <div>
        {children}
      </div>
    </div>
  );
};

export default BlogPost;
