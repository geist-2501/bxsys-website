import styles from './index.module.scss';
import Container from "../components/container/Container.comp";
import Section from "../components/section/Section.comp";
import Column from "../components/column/Column.comp";
import Button from "../components/button/Button.comp";
import Page from "../components/page/Page.comp";

const Index = () => {
  return (
    <Page meta={{name: "Index | BXSYS", desc: "Beep boop"}}>
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
            <Button href={'/'}><h3>See what I've been up too</h3></Button>
          </Column>
        </Container>
      </Section>
    </Page>
  );
}

export default Index;
