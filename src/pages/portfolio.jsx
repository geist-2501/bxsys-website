import React from 'react';
import styles from './Portfolio.module.scss';
import Page from "../components/page/Page.comp";
import Section from "../components/section/Section.comp";
import Container from "../components/container/Container.comp";
import Column from "../components/column/Column.comp";
import List from "../components/list/List.comp";
import ProjectsService from "../utils/projects.service";
import Button from "../components/button/Button.comp";
import Bullet from "../components/bullet/Bullet.comp";

const experiences = [
  {
    date: "Summer 2021.",
    role: "Software Engineer Intern.",
    employer: "J.P. Morgan Chase."
  },
  {
    date: "Sept 2020 - June 2021.",
    role: "Augmented Reality Engineer.",
    employer: "Whereverly."
  },
  {
    date: "Summer 2020.",
    role: "Software Engineer Intern.",
    employer: "Gearset."
  }
]

const Portfolio = ({ projects }) => {
  return (
    <Page meta={{name: "Portfolio | BXSYS", desc: "See what I've done!"}}>
      <Section type="lead">
        <Container>
          <Column to={4}>
            <h1>About.</h1>
            <h4>
              Hi, I’m Blair Cross. I’m a software engineer based in Dundee, Scotland, and a computer science student at
              the University of St Andrews. I love taking complex problems and breaking them down into effective, clean
              solutions.
              <br />
              <br />
              I place value in understanding the problem the client is experiencing, and using communication and
              craftsmanship across a continuous process to solve the evolving issues at hand.
            </h4>
          </Column>
          <Column className={styles.work_experience} from={4} to={6}>
            <h2>Work.</h2>
            <List>
              {experiences.map((experience, i) => (
                <div className={styles.experience} key={i}>
                  <i>{experience.date}</i>
                  <h4>{experience.role}</h4>
                  <p>{experience.employer}</p>
                </div>
              ))}
            </List>
          </Column>
        </Container>
      </Section>
      <Section>
        <Container>
          <Column className={styles.projects}>
            <h2>Projects.</h2>
            {projects.map((project, i) => (
              <Container className={styles.project} key={i}>
                <Column to={3}>
                  <h4><Bullet />{project.title}</h4>
                </Column>
                <Column from={3} to={5}>
                  <i>{project.desc}</i>
                </Column>
                <Column from={5} align={'right'}>
                  <Button href={`/project/${project.name}`}>View</Button>
                </Column>
              </Container>
            ))}
          </Column>
        </Container>
      </Section>
    </Page>
  );
};

export async function getStaticProps() {
  const mdxMeta = await ProjectsService.getProjects();
  return {
    props: {
      projects: mdxMeta
    }
  }
}

export default Portfolio;
