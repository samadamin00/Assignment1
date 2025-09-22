const BlogCard = ({ post }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md p-6 dark:bg-gray-900">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{post.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{post.body.slice(0, 100)}...</p>
      <div className="mt-auto">
        <a href={`/blog/${post.id}`} className="inline-flex items-center text-primary-600 hover:underline dark:text-primary-500">
          Read more
          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;