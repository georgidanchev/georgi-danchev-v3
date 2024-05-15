import { blogPosts } from "../../blogPosts/blogData";

export async function GET(_request, { params }) {
  console.log(params);
  const singleBlogPosts = blogPosts.find((blogPosts) => parseInt(blogPosts.id) === parseInt(blogPosts.id));
  return Response.json(singleBlogPosts);
}
