import React from 'react';
import style from './Project.module.scss';
import Page from "../../components/page/Page.comp";
import Section from "../../components/section/Section.comp";
import Container from "../../components/container/Container.comp";
import Column from "../../components/column/Column.comp";
import FlexImage from '../../components/flexImage/FlexImage.comp';
import Markdown from "../../components/markdown/Markdown.comp";
import PropTypes from "prop-types";

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
            <h1 className={style.view_title}>{meta.title}</h1>
            <h3 className={style.view_title}><i>{meta.desc}</i></h3>
            <Markdown>
              {children}
            </Markdown>
          </Column>
        </Container>
      </Section>
    </Page>
  );
};

ProjectView.propTypes = {
  meta: PropTypes.shape({
    featured: PropTypes.bool,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired
  })
}

export default ProjectView;
