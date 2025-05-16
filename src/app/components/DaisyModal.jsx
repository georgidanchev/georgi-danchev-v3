import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import StyledButton from "./StyledButton";
import { useSelector } from "react-redux";

const DaisyModalWrapper = ({ contentID, type }) => {
  const router = useRouter();
  const blogState = useSelector((state) => state.blog);
  const projectState = useSelector((state) => state.projects);

  let content = [];

  if (type === "project") {
    content = projectState.data.filter((dataEntry) => dataEntry.id === contentID);
  } else if (type === "post") {
    content = blogState.data.filter((dataEntry) => dataEntry.id === contentID);
  }

  if (!content?.length) return null;

  const handleClose = () => {
    router.push("/", { scroll: false });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="absolute w-full h-full" onClick={handleClose}></div>
      <div className="absolute w-full max-w-2xl mx-4 sm:mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4 text-black text-center">{content[0].title}</h3>
          <p className="text-base leading-relaxed text-black text-center">{content[0].text}</p>
          <div className="mt-6 flex justify-center">
            <StyledButton className="!py-2 !px-4" onClick={handleClose}>close</StyledButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DaisyModal() {
  const searchParams = useSearchParams();
  const contentID = searchParams.get("project-id") || searchParams.get("post-id");
  const type = searchParams.get("project-id") ? "project" : "post";
  return <>{contentID && <DaisyModalWrapper contentID={contentID} type={type} />}</>;
}