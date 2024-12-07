import PropTypes from "prop-types";

const ArticleCard = ({ post }) => {
  if (!post) return null;
  return (
    <article className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-indigo-100">
      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
        <span className="inline-flex items-center px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
          {post.category}
        </span>
        <div className="flex items-center gap-2 text-sm text-gray-500 md:ml-auto">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-3 hover:text-indigo-600 transition-colors cursor-pointer">
        {post.title}
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">{post.content}</p>

      <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm inline-flex items-center gap-1 transition-colors">
        Read more
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </article>
  );
};

ArticleCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleCard;
