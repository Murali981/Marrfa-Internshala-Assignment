import { useState } from "react";
import "./App.css";
import ArticleCard from "./components/ArticleCard";
import EmptyState from "./components/EmptyState";
import SearchFilters from "./components/SearchFilters";
import SearchHeader from "./components/SearchHeader";
import SearchInput from "./components/SearchInput";
import { samplePosts, filterPosts, sortPosts } from "./utils/data";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  const categories = [
    "All",
    ...new Set(samplePosts.map((post) => post.category)),
  ];

  const filteredPosts = sortPosts(
    filterPosts(samplePosts, searchTerm, selectedCategory),
    sortBy
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto p-6 md:p-8">
        <SearchHeader />

        <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <SearchFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          categories={categories}
        />

        <div className="space-y-6">
          {filteredPosts.length === 0 ? (
            <EmptyState />
          ) : (
            filteredPosts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
