import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-background">
      <ThemeToggleButton />
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
          Start building your amazing project here!
        </p>
        <Button asChild>
          <Link to="/dashboard">ไปที่ Dashboard</Link>
        </Button>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;