// import instagram from "../assets/instagram.svg"
import Image from "next/image";
import classes from "./SocialLinks.module.scss";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

const socialLinks = ({ className }) => {
  return (
    <ul className={`${className && className} ${classes["social-links"]}`}>
      <li className={classes["social-links__list-item"]}>
        <a
          href="https://www.linkedin.com/in/georgi-danchev/"
          className={classes["social-links__link"]}
          target="_blank"
          rel="noreferrer"
        >
          <Image priority src={linkedin} alt="Instagram icon" height="20" width="20" />
        </a>
      </li>
      <li className={`${classes["social-links__list-item"]}`}>
        <a
          href="https://github.com/georgidanchev"
          className={classes["social-links__link"]}
          target="_blank"
          rel="noreferrer"
        >
          <Image priority src={github} alt="Github icon" height="20" width="20" />
        </a>
      </li>
      {/* <li className={classes[social-links__list-item">
        <a
          href={REACT_APP_INSTAGRAM}
          className={classes[social-links__link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="Instagram icon" height="20" width="20" />
        </a>
      </li> */}
      {/* <li className={classes[social-links__list-item">
        <a className={classes[social-links__link" target="_blank" rel="noreferrer">
          <svg className={classes[social-links__icon" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.12 0H0.755C0.337391 0 0 0.321324 0 0.719048V17.2571C0 17.6549 0.337391 17.9762 0.755 17.9762H18.12C18.5376 17.9762 18.875 17.6549 18.875 17.2571V0.719048C18.875 0.321324 18.5376 0 18.12 0ZM15.9399 5.2468H14.4323C13.2502 5.2468 13.0214 5.78159 13.0214 6.56805V8.30051H15.8432L15.4751 11.0127H13.0214V17.9762H10.0793V11.0149H7.61842V8.30051H10.0793V6.30065C10.0793 3.97948 11.568 2.7144 13.7434 2.7144C14.7862 2.7144 15.6804 2.78856 15.9423 2.82226V5.2468H15.9399Z"
              fill="white"
            />
          </svg>
        </a>
      </li> */}
      {/* <li className={classes[social-links__list-item">
        <a className={classes[social-links__link" target="_blank" rel="noreferrer">
          <svg className={classes[social-links__icon" width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.480341 1.39959C3.637 4.07293 9.17596 8.77616 10.8039 10.2426C11.0225 10.4406 11.2569 10.5412 11.5002 10.5412C11.7431 10.5412 11.9771 10.4415 12.1951 10.2445C13.8245 8.77661 19.3634 4.07293 22.5201 1.39959C22.7167 1.23346 22.7466 0.941472 22.5875 0.738381C22.2197 0.269082 21.6713 0 21.0835 0H1.9169C1.32918 0 0.780733 0.269082 0.412958 0.738426C0.253845 0.941473 0.283807 1.23346 0.480341 1.39959Z"
              fill="white"
            />
            <path
              d="M22.7221 2.84808C22.5522 2.76902 22.3524 2.7966 22.2111 2.91735C18.7104 5.88498 14.2426 9.68887 12.8369 10.9555C12.0479 11.6677 10.9529 11.6677 10.1621 10.9546C8.66381 9.6046 3.64658 5.33936 0.788918 2.9173C0.64665 2.79655 0.446389 2.76991 0.277932 2.84803C0.108576 2.92669 0 3.09609 0 3.28279V15.3331C0 16.3902 0.85958 17.2498 1.91668 17.2498H21.0834C22.1404 17.2498 23 16.3902 23 15.3331V3.28279C23 3.09609 22.8914 2.92624 22.7221 2.84808Z"
              fill="white"
            />
          </svg>
        </a>
      </li> */}
    </ul>
  );
};

export default socialLinks;
