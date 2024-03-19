interface ProjectsSectionProps {}

export default function ProjectsSection({}: ProjectsSectionProps) {
  return (
    <div className="mt-8 w-full">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Projects
      </h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a className="underline" href="https://cvtoblind.com">
            CvToBlind
          </a>
          - Convert CVs to Sales-Ready Profiles in Seconds.
        </li>
        <li>
          <a className="underline" href="https://cvtoblind.com">
            MLNative
          </a>{" "}
          - an MLOps platform for GPU inferences
        </li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
    </div>
  );
}
