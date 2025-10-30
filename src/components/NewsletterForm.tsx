import { useState } from 'react';
import { toast } from 'sonner';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      return toast.error('Please enter your email');
    }
    toast.success('Thanks for subscribing!');
    setEmail('');
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
      <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest insights on AI and wealth creation, delivered straight to your inbox.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          placeholder="Enter your email" 
          className="flex-grow px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Subscribe</button>
      </form>
    </div>
  );
}