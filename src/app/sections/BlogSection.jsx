import BlogPost from "../components/BlogPost";
import SectionTitle from "../components/SectionTitle";
import sectionClasses from "../styles/shared/Sections.module.scss";
import blogClasses from "./BlogSection.module.scss";
import { InView } from "react-intersection-observer";
import { setSectionInView } from "../redux/navReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlogData } from "../redux/blogReducer";

const Blog = () => {
  const blogState = useSelector((state) => state.blog);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);

  const isInView = (inView) => {
    if (inView) {
      dispatch(setSectionInView("blog"));
    }
  };

  return (
    <InView
      id="blog"
      as="section"
      className={sectionClasses.section}
      data-scroll-section
      onChange={isInView}
      threshold={0.5}
    >
      <div
        className={`${sectionClasses["section-width"]} ${sectionClasses["section-width--padding"]} ${blogClasses.blog}`}
      >
        <SectionTitle subtitle="latest posts" title="Coming soon..." />
        <div className={`${blogClasses.blog__content}`}>
          {blogState.loading && <p>Loading...</p>}

          {!blogState.loading && blogState.error ? <p>Error: {blogState.error}</p> : null}

          {!blogState.loading && blogState.data
            ? blogState.data.map((blogPost) => <BlogPost key={blogPost.id} blog_post={blogPost} />)
            : null}
        </div>
      </div>
    </InView>
  );
};

export default Blog;
