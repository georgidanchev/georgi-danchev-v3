import BlogPost from "../components/BlogPost";
import data_blog from "../../assets/data-blog.json";
import SectionHeader from "../components/SectionHeader";
import sectionClasses from "../styles/shared/Sections.module.scss";
import blogClasses from "./BlogSection.module.scss";
import { useDispatch } from 'react-redux';
import { InView } from 'react-intersection-observer';
import { setSectionInView } from "../redux/navReducer";

const Blog = () => {
  let blogPosts = [];

  const dispatch = useDispatch();

  const isInView = (inView) => {
    if (inView) {
      dispatch(setSectionInView("blog"));
    }
  };

  data_blog.forEach((blog_post) => {
    blogPosts.push(<BlogPost key={blog_post.id} blog_post={blog_post} />);
  });

  return (
    <InView
      id="blog"
      as="section"
      className={`${sectionClasses["section"]} ${sectionClasses["section--blogs"]}`}
      data-scroll-section
      onChange={isInView}
      threshold={0.25}
    >
      <div
        className={`${sectionClasses["section-width"]} ${sectionClasses["section-width--padding"]} ${blogClasses["blog"]}`}
      >
        <SectionHeader subtitle="latest posts" title="My Blog Posts" link_title="see more posts" />
        <div className={`${blogClasses["blog__content"]}`}>{blogPosts}</div>
      </div>
    </InView>
  );
};

export default Blog;
