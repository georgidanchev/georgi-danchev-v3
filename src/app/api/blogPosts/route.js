import { blogPosts } from "./blogData";

export async function GET() {
  return Response.json(blogPosts);
}
