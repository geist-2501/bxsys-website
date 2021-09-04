import React from 'react';
import styles from './Blog.module.scss';
import Page from "../../components/page/Page.comp";
import Section from "../../components/section/Section.comp";
import Container from "../../components/container/Container.comp";
import Column from "../../components/column/Column.comp";
import DateService from "../../utils/date.service";

const BlogView = ({meta, children}) => {
  return (
    <Page>
      <Section type="lead">
        <Container type="thin">
          <Column>
            <div className={styles.blog_view_title}>
              <h1>{meta.title}</h1>
              <h4>
                <i className={styles.blog_view_date}>{DateService.toDate(meta.date)}.</i>
                <i>{meta.author}.</i>
              </h4>
            </div>

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
