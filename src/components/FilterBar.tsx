import { assets } from "../assets/assets";

type FilterBarProps = {
  filters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

const FilterBar = ({ filters, setFilters }: FilterBarProps) => {
  return (
    <div className="-mt-18 mb-4 flex w-full max-w-6xl items-center justify-between rounded-md bg-white px-7 py-4 shadow-lg">
      <div className="flex flex-wrap gap-4">
        {filters.map((filter) => (
          <div key={filter} className="tag-box">
            <span className="px-3 py-1">{filter}</span>
            <button
              onClick={() =>
                setFilters((prev) => prev.filter((f) => f !== filter))
              }
              className="bg-green hover:bg-dark-green cursor-pointer p-2.5 text-white"
            >
              <img src={assets.removeIcon} alt="Remove filter" />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => setFilters([])}
        className="text-green cursor-pointer font-semibold hover:underline"
      >
        Clear
      </button>
    </div>
  );
};

export default FilterBar;
