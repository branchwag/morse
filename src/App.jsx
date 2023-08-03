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
            className="text-slate-300"
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
