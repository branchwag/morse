import { useState } from "react";
import TypeWriterEffect from "react-typewriter-effect";
var jsonFile = import("../morse-code.json");

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [val, setVal] = useState("");
  const [morseOutputDiv, setMorseOutputDiv] = useState(<div></div>);

  function handleSubmit() {
    //if user submitted previously, we need to set the output div back to original state
    setMorseOutputDiv(<div></div>);

    //sets empty thing to put our translation in
    var morseCodeString = "";

    //TAKE TEXT AND TRANSLATE
    //for character in string, take each character and figure out what its morse equivalent is

    for (let i = 0; i < val.length; i++) {
      const character = val[i];

      //look in json for value
      var jsonData = Promise.resolve(jsonFile);
      jsonData.then((value) => {
        //console.log(value[character]);
        //console.log(typeof value[character]);

        //If char is not in json, return nothing
        //if value[character] is undefined then return nothing
        if (typeof value[character] == "undefined") {
          //console.log("Hey this character is undefined");
        } else {
          morseCodeString += value[character.toLowerCase()];
        }

        //create new element on page with output using typewriter effect
        setMorseOutputDiv(
          <div>
            <TypeWriterEffect
              textStyle={{
                color: "#fff",
                fontWeight: 500,
                fontSize: "2em",
              }}
              startDelay={100}
              cursorColor="white"
              text={morseCodeString}
              typeSpeed={100}
              eraseSpeed={100}
            />
          </div>
        );
      });
    }
  }

  const change = (event) => {
    setVal(event.target.value);
  };

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

        {!isVisible && (
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
        )}

        {!isVisible && (
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="bg-transparent text-white-700 font-semibold py-2 px-4 border border-white-500 hover:bg-black rounded mt-3"
          >
            Begin
          </button>
        )}

        {isVisible && (
          <div>
            <div className="mb-6 mt-3">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Input text
              </label>
              <input
                value={val}
                onChange={change}
                type="text"
                id="large-input"
                className="block w-full max-w-7xl p-4 text-gray-900 border border-black rounded-lg bg-slate-200 text-base focus:border-black-500"
              ></input>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-transparent text-white-700 font-semibold py-2 px-4 border border-white-500 hover:bg-black rounded"
            >
              Submit
            </button>
            <div>
              <p className="mt-10">
                Morse Code: <br></br>
              </p>
              {morseOutputDiv}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
