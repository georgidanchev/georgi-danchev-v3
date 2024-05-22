import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import StyledButton from "./StyledButton";
import { useSelector } from "react-redux";

const DaisyModalWrapper = ({ contentID, type }) => {
  const router = useRouter();

  const blogState = useSelector((state) => state.blog);
  const projectState = useSelector((state) => state.projects);
  let content;

  if (type == "project") {
    content = projectState.data.filter((dataEntry) => {
      return dataEntry.id == contentID;
    });
  } else {
    content = blogState.data.filter((dataEntry) => {
      return dataEntry.id == contentID;
    });
  }

  console.log(content);

  if (content.length == 0) {
    return null
  }

  return (
    <dialog
      className="modal"
      open={true}
      onClose={() => {
        router.push("/", { scroll: false });
      }}
    >
      <div className="modal-box">
        <div className="flex flex-col justify-between align-middle">
          <h3 className="font-bold text-lg mb-6">Quick view: {content[0].title}</h3>

          <p>{content[0].text}</p>

          <form method="dialog" className="mt-6">
            {/* if there is a button in form, it will close the modal */}
            {/* <button className="btn">Close</button> */}
            <StyledButton className="padding !py-2 !px-4">close</StyledButton>
          </form>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default function DaisyModal() {
  const searchParams = useSearchParams();
  const contentID = searchParams.get("project-id") ? searchParams.get("project-id") : searchParams.get("post-id");
  const type = searchParams.get("project-id") ? "project" : "post";

  return <>{contentID && <DaisyModalWrapper contentID={contentID} type={type} />}</>;
}
