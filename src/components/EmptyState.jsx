import { BookOpen } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl">
      <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
      <p className="text-gray-500 text-lg">No results found for your search.</p>
      <p className="text-gray-400">
        Try adjusting your search terms or filters
      </p>
    </div>
  );
};

export default EmptyState;
