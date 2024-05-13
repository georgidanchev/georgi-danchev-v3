"use client"

import contactSVG from "../../assets/contact.svg";
import DecorativeBorder from "../components/DecorativeBorder.jsx";
import React, { useState } from "react";
import ResponsiveImage from "../components/ResponsiveImage.jsx";
import SectionClasses from "../styles/shared/Sections.module.scss";
import ContactClasses from "./ContactSections.module.scss";
import Image from "next/image";
import StyledButton from "../components/StyledButton";
import { useDispatch } from "react-redux";
import { setSectionInView } from "../redux/navReducer";
import { InView } from "react-intersection-observer";

const ContactSection = ({ children }) => {
  // const ref_contact = useRef()
  // useIntersection(ref_contact, "contact")

  const dispatch = useDispatch()

  const isInView = (inView) => {
    if (inView) {
      dispatch(setSectionInView("contact"))
    }
  };

  const submitBtn = React.createRef();
  let [formSubmitted, isFormSubmitted] = useState(false);

  const btnStates = {
    error: "error",
    sending: "sending",
    sent: "sent",
  };

  const toggleActiveField = (e) => {
    if (e.target.value === "") {
      e.target.parentNode.classList.remove("active");
    } else {
      e.target.parentNode.classList.add("active");
    }
  };

  const escapeString = (string) => {
    const newString = string
      .replace(/"/g, "&quot;")
      .replace(/[\\"']/g, "\\$&")
      .replace(/@/g, "%40")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    return newString;
  };

  const resetInputFields = (e) => {
    for (const element of e.target) {
      if (element.hasAttribute("data-name")) {
        element.value = "";
      }
    }
  };

  const buildFormData = (e) => {
    let formBody = `access_token=w3h6ts7se4otodw6ggzah8pi`;
    for (const element of e.target) {
      if (element.hasAttribute("data-name")) {
        formBody += `&${element.dataset.name}=${escapeString(element.value)}`;
      }
    }
    return formBody;
  };

  const submitBtnManager = (state) => {
    switch (state) {
      case btnStates.error:
        submitBtn.current.innerText = "Error";
        break;
      case btnStates.sending:
        submitBtn.current.innerText = "Sending...";
        // submitBtn.current.disabled = true
        break;
      case btnStates.sent:
        submitBtn.current.innerText = "Sent!";
        break;
      default:
        break;
    }
  };

  const submitForm = (e) => {
    submitBtnManager(btnStates.sending);
    const formDate = buildFormData(e);

    fetch("https://postmail.invotes.com/send", {
      body: formDate,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "post",
    })
      .then(() => {
        submitBtnManager(btnStates.sent);
        resetInputFields(e);
        isFormSubmitted((formSubmitted = true));
      })
      .catch((err) => {
        submitBtnManager(btnStates.error);
        console.error(err);
      });
  };

  const validateSubmit = (e) => {
    let passedFields = 0;
    let numberOfFields = 0;

    const failedValidation = (input, message) => {
      const inputLabel = input.nextSibling;
      const placeholderText = inputLabel.innerText;
      input.classList.add("danger");

      if (message !== undefined) {
        inputLabel.innerText = message;
      } else {
        inputLabel.innerText = `You missed the ${inputLabel.htmlFor} field`;
      }

      setTimeout(() => {
        inputLabel.innerText = placeholderText;
        input.classList.remove("danger");
      }, 5000);
    };

    const inputFormEmpty = (input) => {
      failedValidation(input);
    };

    for (const input of e.target) {
      if (input.hasAttribute("data-name")) {
        numberOfFields++;
        if (input.value === "") {
          inputFormEmpty(input);
        } else {
          passedFields++;
        }
      }
    }

    if (numberOfFields === passedFields) {
      submitForm(e);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    validateSubmit(e);
  };

  return (
    <InView threshold={0.25} as="section" className={SectionClasses["section"]} onChange={isInView}>
      <div
        id="contact"
        data-scroll-section
        data-scroll
        data-scroll-repeat="true"
        data-scroll-call="contact"
        data-scroll-offset="50%,50%"
      >
        <DecorativeBorder location="top" />

        <div
          className={`${SectionClasses["section-width"]} ${SectionClasses["section-width--padding"]} ${ContactClasses["contact"]}`}
        >
          <div
            className={`${ContactClasses["contact__container"]} animate__animated animate__hidden animate__delay-1ms`}
            data-scroll
            data-scroll-repeat="false"
            data-scroll-class="animate__fadeIn"
          >
            <Image className={ContactClasses["contact__image"]} src={contactSVG} height="450" width="auto" alt="" />
            <form
              className={`${ContactClasses["contact__form"]} ${ContactClasses["contact-form"]}`}
              action="https://postmail.invotes.com/send"
              method="post"
              onSubmit={formSubmit}
              autoComplete="off"
            >
              <h2 className={`${ContactClasses["contact-form__title"]}`}>Get in Touch</h2>

              {formSubmitted === false ? (
                <React.Fragment>
                  <div className={`${ContactClasses["contact-form__input-group"]}`}>
                    <input
                      className={`${ContactClasses["contact-form__input"]}`}
                      type="text"
                      id="name"
                      data-name="subject"
                      onChange={toggleActiveField}
                    />
                    <label className={`${ContactClasses["contact-form__label"]}`} htmlFor="name">
                      Your name
                    </label>
                  </div>
                  <div className={`${ContactClasses["contact-form__input-group"]}`}>
                    <input
                      className={`${ContactClasses["contact-form__input"]}`}
                      type="email"
                      id="email"
                      data-lpignore="true"
                      data-name="extra_email"
                      onChange={toggleActiveField}
                    />
                    <label className={`${ContactClasses["contact-form__label"]}`} htmlFor="email">
                      Your email
                    </label>
                  </div>
                  <div className={`${ContactClasses["contact-form__input-group"]}`}>
                    <textarea
                      className={`${ContactClasses["contact-form__textarea"]}`}
                      data-name="text"
                      id="message"
                      cols="30"
                      rows="10"
                      onChange={toggleActiveField}
                    ></textarea>
                    <label className={`${ContactClasses["contact-form__label"]}`} htmlFor="message">
                      How can I help you?
                    </label>
                  </div>
                  <StyledButton className={`${ContactClasses["contact-form__btn"]}`} type="submit" ref={submitBtn}>Send Message</StyledButton>
                </React.Fragment>
              ) : (
                <p className={`${ContactClasses["contact-form__success-text"]}`}>Thanks for your message!</p>
              )}
            </form>
          </div>
        </div>

        <div className={`${SectionClasses["section__bg-image-wrapper"]}`}>
          <ResponsiveImage
            className={`${SectionClasses["section__bg-image"]}`}
            code="v1629540939"
            public_id="contact_vfklx0"
            width="420"
            height="900"
          />
        </div>
      </div>
    </InView>
  );
};

export default ContactSection;
