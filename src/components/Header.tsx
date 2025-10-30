import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4ab4ec92-e0b2-4292-b64c-d4c4d95d6c1d/akili-ai-logo-62ge6fm-1761834549390.webp" alt="Akili AI Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-gray-800">Akili AI</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </nav>
        <Link to="/auth" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Login / Sign Up</Link>
      </div>
    </header>
  );
}