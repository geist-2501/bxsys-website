import ProjectsService from "../../utils/projects.service";
import ProjectPage from "../../views/project/Project.page";

const ProjectIndex = (props) => {
  return <ProjectPage {...props} />;
};

export async function getStaticProps() {
  const projects = await ProjectsService.getProjects();
  return {
    props: {
      projects
    }
  }
}

export default ProjectIndex;
