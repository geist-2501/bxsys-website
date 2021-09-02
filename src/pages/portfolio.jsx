import PortfolioPage from "../views/portfolio/Portfolio.page";
import ProjectsService from "../utils/projects.service";

const Portfolio = ({ projects }) => {
  return <PortfolioPage projects={projects} />
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
