import { projects } from "../data";

export async function GET(_request, { params }) {
  console.log(params);
  const singleProject = projects.find((project) => parseInt(project.id) === parseInt(params.id));
  return Response.json(singleProject);
}
