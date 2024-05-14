import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DaisyModalWrapper = ({ projectId, postId }) => {
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
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
        {projectId}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
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
  const projectId = searchParams.get("project-id");
  const postId = searchParams.get("post-id");

  return (
    <>
      {projectId && <DaisyModalWrapper projectId={projectId} />}
      {postId && <DaisyModalWrapper projectId={projectId} />}
    </>
  );
}
