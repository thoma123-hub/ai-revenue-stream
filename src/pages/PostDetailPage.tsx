import { useParams } from 'react-router-dom';
import { posts } from '../lib/posts';
import { Heart, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function PostDetailPage() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleLike = () => {
    toast.success('Thanks for the like!');
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <img src={post.thumbnailUrl} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 text-lg mb-8">{post.description}</p>
      <div className="prose prose-lg max-w-none">
        <p>This is where the full blog post content will go. For now, we are using the short description as a placeholder. The actual content will be much more detailed and formatted with headings, lists, and more.</p>
        <p>{post.description}</p>
      </div>
      
      <div className="mt-8 flex items-center space-x-6">
        <button onClick={handleLike} className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
          <Heart />
          <span>Like</span>
        </button>
        <div className="flex items-center space-x-2 text-gray-600">
          <MessageCircle />
          <span>0 Comments</span>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <div className="space-y-4">
          <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
          <textarea rows={4} placeholder="Add your comment..." className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Submit Comment</button>
        </div>
      </div>
    </div>
  );
}