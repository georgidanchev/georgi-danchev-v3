import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import StyledButton from './StyledButton';
import { useSelector } from "react-redux";

const DaisyModalWrapper = ({contentID}) => {
  const router = useRouter();

  return (
    <dialog
      className="modal"
      open={true}
      onClose={() => {
        router.push("/", { scroll: false });
      }}
    >
      <div className="modal-box">
        <div className="flex justify-between align-middle mb-6">
          <h3 className="font-bold text-lg">Hello!</h3>
          <div className="modal-action">
        </div>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            {/* <button className="btn">Close</button> */}
            <StyledButton className="padding !py-2 !px-4">close</StyledButton>
          </form>
        </div>
        <p>{contentID}</p>
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

  return (
    <>
      {contentID && <DaisyModalWrapper contentID={contentID} />}
    </>
  );
}
