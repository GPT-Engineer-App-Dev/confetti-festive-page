import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our App</h1>
        <p className="text-xl mb-8">Explore the amazing features we have to offer!</p>
        <Link to="/confetti">
          <Button className="bg-white text-purple-600 hover:bg-purple-100 transition-colors">
            Try Confetti Page
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
