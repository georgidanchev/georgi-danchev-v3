import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DaisyModalWrapper = ({projectId}) => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (projectId) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [projectId]);

  return (
    <dialog
      className="modal"
      open={isOpen}
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
  const projectId = searchParams.get("project");

  return <>{projectId && <DaisyModalWrapper projectId={projectId} />}</>;
}
