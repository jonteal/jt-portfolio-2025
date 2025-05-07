import { ProjectCarousel } from "@/components/ProjectCarousel";
import { workItems } from "@/utils/work";
import { FaGithubAlt } from "react-icons/fa";
import { useParams } from "react-router";

export const ProjectDetails = () => {
  const { projectId } = useParams();

  const project = workItems.find((item) => item.id === projectId);
  console.log(project);
  return (
    <div className="flex flex-col justify-center w-3/4 mx-auto">
      <div className="flex flex-row mt-40 mb-5">
        {project?.github && (
          <a
            className="transform transition duration-500 hover:scale-110 hover:bg-secondary flex justify-center items-center mt-0 p-2 border rounded-xl"
            href={project.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithubAlt className="text-white text-3xl" />
          </a>
        )}
      </div>
      <h1 className="text-white text-3xl font-bold text-left mb-6">
        {project?.title}
      </h1>
      <ProjectCarousel projectTitle={project?.title} images={project?.images} />
      <p className="text-xl italic mt-5">{project?.description}</p>
      <div className="grid gird-cols-2 gap-4 justify-between mx-auto w-full items-start mt-5 mb-10">
        {project?.gifs?.map((gif) => (
          <img className="rounded" src={gif} alt={project.title} />
        ))}
      </div>
    </div>
  );
};
