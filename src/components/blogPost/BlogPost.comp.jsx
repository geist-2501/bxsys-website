import React from 'react';
import styles from './BlogPost.module.scss';
import Page from "../page/Page.comp";
import Section from "../section/Section.comp";
import Container from "../container/Container.comp";
import Column from "../column/Column.comp";

const BlogPost = ({meta, children}) => {
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

export default BlogPost;
