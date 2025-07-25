import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-4xl font-bold text-center text-green-500 transition duration-1000 hover:text-blue-500 transform hover:scale-110 mb-6">
      Welcome to MeetAI
      </div>
      <Button variant="outline" className="px-6 py-3 text-lg font-medium hover:bg-blue-500 hover:text-white transition">
      Get Started
      </Button>
    </div>
  );
}
