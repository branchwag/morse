// import { useState } from "react";
import TypeWriterEffect from "react-typewriter-effect";

function App() {
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

        <button className="bg-transparent hover:bg-white-500 text-white-700 font-semibold py-2 px-4 border border-white-500 hover:border-transparent rounded mt-3">
          Begin
        </button>
      </div>
    </>
  );
}

export default App;
