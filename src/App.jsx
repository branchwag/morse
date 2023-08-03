import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <h1 className="text-3xl font-bold text-slate-300">Morse</h1>
        <div className="">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="text-slate-300 py-2 px-2 border-2 rounded-full"
          >
            count is {count}
          </button>
          <p className="text-slate-300">Test para</p>
        </div>
      </div>
    </>
  );
}

export default App;
