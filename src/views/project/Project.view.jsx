import React from 'react';
import Page from "../../components/page/Page.comp";
import Section from "../../components/section/Section.comp";
import Container from "../../components/container/Container.comp";
import Column from "../../components/column/Column.comp";

const ProjectView = () => {
  return (
    <Page margin={'none'}>
      <Section type={"hero"}>
        <Container>
          <Column>
            <h1>Under construction 🚧</h1>
          </Column>
        </Container>
      </Section>
    </Page>
  );
};

export default ProjectView;
