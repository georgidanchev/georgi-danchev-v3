import BlogPost from "../components/BlogPost";
import SectionTitle from "../components/SectionTitle";
import sectionClasses from "../styles/shared/Sections.module.scss";
import blogClasses from "./BlogSection.module.scss";

// import { getBlogData } from "../redux/blogReducer";
import { InView } from "react-intersection-observer";
import { setSectionInView } from "../redux/navReducer";
import { useDispatch, useSelector } from "react-redux";
import useFetch, { getAllBlogPosts } from "../hooks/useFetch";
// import { blogActions } from "../redux/blogReducer";

const Blog = () => {
  const dispatch = useDispatch();


  // dispatch(blogActions.setBlogData(fetchedData));

  let blogPosts = [];

  fetchedData.forEach((blog_post) => {
    blogPosts.push(<BlogPost key={blog_post.id} blog_post={blog_post} />);
  });

  const isInView = (inView) => {
    if (inView) {
      dispatch(setSectionInView("blog"));
    }
  };

  return (
    <InView
      id="blog"
      as="section"
      className={sectionClasses["section"]}
      data-scroll-section
      onChange={isInView}
      threshold={0.5}
    >
      <div
        className={`${sectionClasses["section-width"]} ${sectionClasses["section-width--padding"]} ${blogClasses["blog"]}`}
      >
        <SectionTitle subtitle="latest posts" title="My Blog Posts" />
        <div className={`${blogClasses["blog__content"]}`}>{blogPosts}</div>
      </div>
    </InView>
  );
};

export default Blog;
