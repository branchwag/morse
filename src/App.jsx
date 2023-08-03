import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <h1 className="text-3xl font-bold underline">Morse</h1>
        <div className="">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>Test para</p>
        </div>
      </div>
    </>
  );
}

export default App;
