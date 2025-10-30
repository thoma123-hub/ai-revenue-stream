import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  slug: string;
  description: string;
  thumbnailUrl: string;
}

interface BlogPostCardProps {
  post: Post;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link to={`/post/${post.slug}`} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="p-6 flex-grow">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
          <p className="text-gray-600 leading-relaxed">{post.description}</p>
        </div>
        <div className="flex-shrink-0 md:w-1/3">
          <img src={post.thumbnailUrl} alt={post.title} className="w-full h-48 md:h-full object-cover" />
        </div>
      </div>
    </Link>
  );
}