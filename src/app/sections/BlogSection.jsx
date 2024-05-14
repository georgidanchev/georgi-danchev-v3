import BlogPost from "../components/BlogPost";
import SectionTitle from "../components/SectionTitle";
import sectionClasses from "../styles/shared/Sections.module.scss";
import blogClasses from "./BlogSection.module.scss";
import { useDispatch } from 'react-redux';
import { InView } from 'react-intersection-observer';
import { setSectionInView } from "../redux/navReducer";
import useFetch, { getAllBlogPosts } from "../hooks/useFetch";

const Blog = () => {
  const { isFetching, error, fetchedData } = useFetch(getAllBlogPosts, []);
  let blogPosts = [];

  const dispatch = useDispatch();

  const isInView = (inView) => {
    if (inView) {
      dispatch(setSectionInView("blog"));
    }
  };

  fetchedData.forEach((blog_post) => {
    blogPosts.push(<BlogPost key={blog_post.id} blog_post={blog_post} />);
  });

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
        <SectionTitle subtitle="latest posts" title="My Blog Posts" link_title="see more posts" className="section-header--align-left-tablet-on" />
        <div className={`${blogClasses["blog__content"]}`}>{blogPosts}</div>
      </div>
    </InView>
  );
};

export default Blog;
