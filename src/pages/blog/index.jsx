import React from 'react';
import Link from 'next/link'
import fs from 'fs';
import path from 'path';

const BlogIndex = ({ fileNames }) => {

  return (
    <div>
      <h1>All blogs</h1>
      {fileNames.map((fileName, i) => <Link href={'/blog/'+fileName} key={i}>{fileName}</Link>)}
    </div>
  );
};

export async function getStaticProps() {
  const fileNames = fs.readdirSync('./src/pages/blog');
  const sanitized = fileNames.map((file => path.parse(file).name));
  sanitized.splice(fileNames.indexOf('index'), 1);
  return {
    props: {
      fileNames: sanitized
    }
  }
}

export default BlogIndex;
