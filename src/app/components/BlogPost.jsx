import calendar from "../../assets/calendar.svg";
import clock from "../../assets/clock.svg";
import ResponsiveImage from "./ResponsiveImage";
import postClasses from "./BlogPosts.module.scss";
import Image from "next/image";
import Link from "next/link";

const BlogPost = (props) => {
  const blog_post = props.blog_post;

  const readTimeCalc = () => {
    const text = blog_post.text;
    if (!text) return;
    const wordsPerMinute = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);
    return time;
  };

  const calcPostedDays = (date_str) => {
    const dateArray = date_str.split("/");
    const reFormatedDateStr = `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`;
    const postDate = new Date(reFormatedDateStr);
    return Math.round((new Date() - postDate) / (1000 * 60 * 60 * 24));
  };

  return (
    <Link scroll={false} href={`/?post-id=${blog_post.id}`} className={postClasses["blog-post"]}>
      <div className={postClasses["blog-post__image-wrap"]}>
        <ResponsiveImage
          className={postClasses["blog-post__image"]}
          code="v1629540938"
          public_id={blog_post.img_name}
          alt={blog_post.img_alt}
          width="116"
          height="116"
        />
      </div>
      <div className={postClasses["blog-post__wrap"]}>
        <h3 className={postClasses["blog-post__title"]}>{blog_post.title}</h3>
        <div className={postClasses["blog-post__label-wraps"]}>
          <p className={postClasses["blog-post__label"]}>
            <Image className={postClasses["blog-post__icon"]} height="15" width="15" src={calendar} alt="calendar icon" />
            <span>{calcPostedDays(blog_post.date)} days ago</span>
          </p>
          <p className={postClasses["blog-post__label"]}>
            <Image className={postClasses["blog-post__icon"]} height="15" width="15" src={clock} alt="clock icon" />
            <span>{readTimeCalc(blog_post.text)} min read</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
