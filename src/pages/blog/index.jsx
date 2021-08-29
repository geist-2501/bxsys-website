import React from 'react';
import Link from 'next/link'
import Page from "../../components/page/Page.comp";
import Section from "../../components/section/Section.comp";
import Container from "../../components/container/Container.comp";
import Column from "../../components/column/Column.comp";
import MdxUtil from "../../utils/mdx.util";

const BlogIndex = ({ fileNames }) => {

  return (
    <Page>
      <Section>
        <Container>
          <Column>
            <h1>All blogs</h1>
            <ul>
              {fileNames.map((fileName, i) => <li><Link href={'/blog/'+fileName} key={i}>{fileName}</Link></li>)}
            </ul>
          </Column>
        </Container>
      </Section>
    </Page>
  );
};

export async function getStaticProps() {
  const docs = MdxUtil.getDocs('./src/pages/blog', ['index']);
  return {
    props: {
      fileNames: docs
    }
  }
}

export default BlogIndex;
