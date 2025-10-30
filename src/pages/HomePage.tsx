import BlogPostCard from '../components/BlogPostCard';
import NewsletterForm from '../components/NewsletterForm';
import { posts } from '../lib/posts';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold text-center mb-8">Insights on AI & Wealth Creation</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {posts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      <section className="py-12 bg-gray-100 rounded-lg">
        <NewsletterForm />
      </section>
    </div>
  );
}