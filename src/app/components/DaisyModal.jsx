import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import StyledButton from './StyledButton';

const DaisyModalWrapper = () => {
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
        <p>stuff</p>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default function DaisyModal() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("project-id");
  const postId = searchParams.get("post-id");

  return (
    <>
      {projectId && <DaisyModalWrapper projectId={projectId} />}
      {postId && <DaisyModalWrapper projectId={projectId} />}
    </>
  );
}
