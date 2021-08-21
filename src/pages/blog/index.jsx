import React from 'react';
import fs from 'fs';

const BlogIndex = ({ fileNames }) => {

  return (
    <div>
      <h1>All blogs</h1>
      {fileNames.map((fileName, i) => <p key={i}>{fileName}</p>)}
    </div>
  );
};

export async function getStaticProps() {
  const fileNames = fs.readdirSync('./src/pages/blog');
  fileNames.splice(fileNames.indexOf('index.jsx'), 1);
  return {
    props: {
      fileNames
    }
  }
}

export default BlogIndex;
