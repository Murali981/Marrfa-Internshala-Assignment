import { Filter } from "lucide-react";
import PropTypes from "prop-types";

const SearchFilters = ({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  categories,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
      <div className="flex items-center gap-3">
        <Filter size={20} className="text-indigo-500" />
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-3 md:ml-auto">
        <label className="text-gray-600">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white"
        >
          <option value="date">Date</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

SearchFilters.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchFilters;
