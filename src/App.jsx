import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-fuchsia-700">
        <h1 className="text-3xl font-bold underline">Morse</h1>
        <div className="card bg-fuchsia-700">
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
