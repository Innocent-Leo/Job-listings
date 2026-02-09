import JobCard from "./JobCard";
import { jobData } from "../data/jobData";
import FilterBar from "./FilterBar";
import { useState } from "react";

const JobList = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = (tag: string) => {
    setFilters((prev) => (prev.includes(tag) ? prev : [...prev, tag]));
  };

  return (
    <div className="bg-light-green flex flex-col items-center justify-center gap-10 p-4 py-10 md:gap-6">
      {filters.length > 0 && (
        <FilterBar filters={filters} setFilters={setFilters} />
      )}

      {jobData.map((job) => (
        <JobCard key={job.id} job={job} addFilter={addFilter} />
      ))}
    </div>
  );
};

export default JobList;
