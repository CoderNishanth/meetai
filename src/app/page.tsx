import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="text-4xl font-bold text-center text-green-500 transition duration-1000 hover:text-blue-500 transform hover:scale-110 ">
      Hello World
      <Button variant="custom" className="ml-10">
        Click Me
      </Button>
    </div>
  );
}
