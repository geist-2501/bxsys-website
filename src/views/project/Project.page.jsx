import React, { useEffect } from 'react';
import styles from './Project.module.scss';
import Page from "../../components/page/Page.comp";
import Section from '../../components/section/Section.comp';
import Column from '../../components/column/Column.comp';
import Container from '../../components/container/Container.comp';
import Button from '../../components/button/Button.comp';
import Bullet from '../../components/bullet/Bullet.comp';

const ProjectPage = ({ projects }) => {

  function pad(num) {
    return String(num).padStart(2, '0');
  }

  return (
    <Page>
      <Section>
        <Container>
          <Column>
            <h1>My Projects.</h1>
            {projects.map((project, i) => (
              <div key={i} className={styles.project_wrapper}>
                <div className={styles.project_grid_wrapper}>
                  <Bullet className={styles.bullet} />
                  <h3 className={styles.title}>{project.title}</h3>
                  <div className={styles.content}>
                    <i >{project.desc}</i>
                    <Button href={`/project/${project.name}`} className={styles.button}>
                      Read more
                    </Button>                  
                  </div>
                </div>
                <div className={styles.image} style={{"--bg-image": `url(${project.image})`}}>
                  <p className={styles.image_num}>{pad(i)}</p>
                </div>
              </div>
            ))}
          </Column>
        </Container>
      </Section>
    </Page>
  );
};

export default ProjectPage;
