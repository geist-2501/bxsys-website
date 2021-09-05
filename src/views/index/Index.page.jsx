import React from 'react';
import styles from './Index.module.scss';
import Page from "../../components/page/Page.comp";
import Section from "../../components/section/Section.comp";
import Container from "../../components/container/Container.comp";
import Column from "../../components/column/Column.comp";
import Button from "../../components/button/Button.comp";

const IndexPage = () => {
  return (
    <Page meta={{name: "Index | BXSYS", desc: "Beep boop"}} margin={'none'}>
      <Section type="hero">
        <Container>
          <Column to={4} className={styles.occupation}>
            <h1>👋</h1>
            <h3>Hey there,</h3>
            <h1>I'm Blair Cross.</h1>
            <h2>A Scotland based student and software engineer.</h2>
          </Column>
          <Column className={styles.interests}>
            <h2>I like building user centric solutions, and AI.</h2>
            <h4>(Sometimes at the same time)</h4>
          </Column>
          <Column>
            <Button href={'/blog'}><h3>See what I've been up too</h3></Button>
          </Column>
        </Container>
      </Section>
    </Page>
  );
};

export default IndexPage;
