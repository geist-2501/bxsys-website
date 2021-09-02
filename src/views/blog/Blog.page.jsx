import React from 'react';
import styles from './Blog.module.scss';
import Section from "../../components/section/Section.comp";
import Container from "../../components/container/Container.comp";
import Column from "../../components/column/Column.comp";
import Bullet from "../../components/bullet/Bullet.comp";
import Button from "../../components/button/Button.comp";
import Page from "../../components/page/Page.comp";

const BlogPage = ({ posts }) => {
  return (
    <Page>
      <Section>
        <Container>
          <Column>
            <h1>Technical Blog.</h1>
          </Column>
        </Container>
        <Container>
          <Column to={4}>
            <h2>All.</h2>
            {posts.map((post, i) => (
              <div key={i} className={styles.post_wrapper}>
                <div>
                  <Bullet className={styles.bullet} />
                </div>
                <div>
                  <div>
                    <i className={styles.date}>{post.date}.</i>
                    <i>{post.author}.</i>
                  </div>
                  <h4>{post.title}</h4>
                  <p>{post.desc}</p>
                  <Button href={`/blog/${post.name}`} className={styles.button}>Read More</Button>
                </div>
              </div>
            ))}
          </Column>
          <Column from={4}>
            <h2>Preface.</h2>
            <p>
              Software developement is a process. One that lives, and iteratively improves. <br />
              <br />
              I am also a process, that is also living, and that (supposedly) improves. I write about the bits and peices of software development as I learn them.<br />
              <br />
              So take everything I write here with a grain of salt - I’m only 21 and have no idea what I’m talking about, but you might find something useful here.
            </p>
          </Column>
        </Container>
      </Section>
    </Page>
  );
};

export default BlogPage;
