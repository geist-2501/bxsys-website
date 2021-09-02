import React from 'react';
import styles from './Blog.module.scss';
import Page from "../../components/page/Page.comp";
import Section from "../../components/section/Section.comp";
import Container from "../../components/container/Container.comp";
import Column from "../../components/column/Column.comp";

const BlogView = ({meta, children}) => {
  return (
    <Page>
      <Section>
        <Container>
          <Column>
            <h1>{meta.title}</h1>
            <h4>{meta.author} - {meta.date}</h4>
            <div className={styles.markdown}>
              {children}
            </div>
          </Column>
        </Container>
      </Section>
    </Page>
  );
};

export default BlogView;
