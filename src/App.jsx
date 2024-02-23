import { useState } from "react";
import TypeWriterEffect from "react-typewriter-effect";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen px-8">
        <h1 className="text-3xl font-bold text-white">Morse</h1>

        <TypeWriterEffect
          textStyle={{
            color: "#fff",
            fontWeight: 500,
            fontSize: "1.5em",
          }}
          startDelay={100}
          cursorColor="white"
          text="A site for translating text to morse code."
          typeSpeed={100}
          eraseSpeed={100}
        />

        <TypeWriterEffect
          textStyle={{
            color: "#fff",
            fontWeight: 500,
            fontSize: "1.5em",
          }}
          startDelay={100}
          cursorColor="white"
          text=".- / ... .. - . / ..-. --- .-. / - .-. .- -. ... .-.. .- - .. -. --. / - . -..- - / - --- / -- --- .-. ... . / -.-. --- -.. . .-.-.-"
          typeSpeed={100}
          eraseSpeed={100}
        />

        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-transparent text-white-700 font-semibold py-2 px-4 border border-white-500 hover:bg-black rounded mt-3"
        >
          Begin
        </button>

        {isVisible && (
          <div>
            <div className="mb-6">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Input text
              </label>
              <input
                type="text"
                id="large-input"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></input>
            </div>

            <button className="bg-transparent text-white-700 font-semibold py-2 px-4 border border-white-500 hover:bg-black rounded">
              Submit
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
