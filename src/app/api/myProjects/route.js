import { projects } from "./projectsData";

export async function GET() {
  return Response.json(projects);
}
