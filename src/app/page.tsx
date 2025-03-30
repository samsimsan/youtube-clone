import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="m-4">
      <p className="font-bold text-2xl text-red-800">
        This is the first custom line of the project!
      </p>
      <Button variant="ghost" className="px-6 py-4">Click!</Button>
    </div>
  );
}
