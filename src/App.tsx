import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-slate-300">
        Hello world!
      </h1>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button className="cursor-pointer">Click me</Button>
      </div>
    </>
  );
}

export default App;
