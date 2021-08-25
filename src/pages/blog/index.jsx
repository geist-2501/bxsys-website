import React from 'react';
import Link from 'next/link'
import fs from 'fs';
import path from 'path';
import Page from "../../components/page/Page.comp";
import Navbar from "../../components/navbar/Navbar.comp";
import Footer from "../../components/footer/Footer.comp";
import Section from "../../components/section/Section.comp";
import Container from "../../components/container/Container.comp";
import Column from "../../components/column/Column.comp";

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
