// src/utils/data.js
export const samplePosts = [
  {
    id: 1,
    title: "Getting Started with React",
    content:
      "React is a powerful JavaScript library for building user interfaces...",
    category: "Programming",
    date: "2024-03-15",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    content:
      "Tailwind CSS is a utility-first CSS framework that can speed up your development...",
    category: "Design",
    date: "2024-03-10",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "The Future of Web Development",
    content:
      "As we look ahead to the future of web development, several trends are emerging...",
    category: "Technology",
    date: "2024-03-05",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "UI Design Principles",
    content:
      "Understanding core UI design principles is essential for creating effective interfaces...",
    category: "Design",
    date: "2024-03-01",
    readTime: "7 min read",
  },
];

export const filterPosts = (posts, searchTerm, selectedCategory) => {
  return posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
};

export const sortPosts = (posts, sortBy) => {
  return [...posts].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date);
    }
    return a.title.localeCompare(b.title);
  });
};
