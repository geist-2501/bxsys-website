import React from 'react';
import style from './Project.module.scss';
import Page from "../../components/page/Page.comp";
import Section from "../../components/section/Section.comp";
import Container from "../../components/container/Container.comp";
import Column from "../../components/column/Column.comp";
import FlexImage from '../../components/flexImage/FlexImage.comp';
import Links from "../../components/links/Links.comp";

const ProjectView = ({children, meta}) => {
  return (
    <Page>
      <Section>
        <Container type="wide">
          <Column>
            <FlexImage className={style.view_image} url={meta.image} />
          </Column>
        </Container>
      </Section>
      <Section>
        <Container>
          <Column>
            <h1>{meta.title}<Links links={['github.com', 'linkedin.com']} /></h1>
            <h3><i>{meta.desc}</i></h3>
            {children}
          </Column>
        </Container>
      </Section>
    </Page>
  );
};

export default ProjectView;
