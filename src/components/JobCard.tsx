import type { Job } from "../types/jobs";

type JobCardProps = {
  job: Job;
  addFilter: (tag: string) => void;
};

const JobCard = ({ job, addFilter }: JobCardProps) => {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <>
      <div className="relative mx-auto w-full max-w-6xl rounded-lg shadow-lg">
        <div className="overflow-hidden rounded-md bg-white">
          <div className="group border-green flex flex-col gap-4 p-7 pt-10 transition-all hover:border-s-5 sm:flex-row sm:items-center sm:justify-between md:pt-7">
            <div className="flex items-center justify-start gap-4">
              <img
                className="absolute -top-6 left-7 size-14 transition-all group-hover:left-8 md:static md:size-20"
                src={job.logo}
                alt="icon"
              />
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center justify-start gap-6">
                  <p className="text-green font-bold">{job.company}</p>
                  <div className="flex gap-2">
                    {job.new && <p className="bg-green new-featured">New!</p>}
                    {job.featured && (
                      <p className="bg-dark-green new-featured">Featured</p>
                    )}
                  </div>
                </div>
                <p className="font-bold">{job.position}</p>
                <p className="text-grey font-semibold">
                  {job.postedAt} <span>&nbsp; &bull; &nbsp;</span>{" "}
                  {job.contract}
                  <span>&nbsp; &bull; &nbsp;</span> {job.location}
                </p>
              </div>
            </div>
            <hr className="border-green my-3 border-t sm:hidden" />
            <div className="justify-left flex flex-1 flex-wrap items-center gap-5 transition-all sm:justify-end sm:group-hover:translate-x-2">
              {tags.map((tag) => (
                <span key={tag} className="tags" onClick={() => addFilter(tag)}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
