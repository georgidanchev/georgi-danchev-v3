import { blogPosts } from "./data";

export async function GET() {
  return Response.json(blogPosts);
}
