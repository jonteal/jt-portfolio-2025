import { useEffect, useState } from "react";

const WORDS = [
  "React",
  "JavaScript",
  "TypeScript",
  "NextJS",
  "NodeJS",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Apollo",
  "TailwindCSS",
  "Bootstrap",
  "State",
  "Props",
  "Lifecycle",
  "Hooks",
];

export const WordScramble = () => {
  const [correctWord, setCorrectWord] = useState<string>("");
  const [scrambledWord, setScrambledWord] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [isPlayOn, setIsPlayOn] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [className, setClassName] = useState<string>("");

  const selectWord = () => {
    const radIndex = Math.floor(Math.random() * WORDS.length);
    return WORDS[radIndex];
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value.toUpperCase());
  };

  const handleClick = (e: any) => {
    e.preventDefault();

    if (correctWord === inputValue) {
      setMessage("Correct!");
      setClassName("text-green-400");
      setInputValue("");
      const word = selectWord();
      setCorrectWord(word.toUpperCase());
      setScrambledWord(constructScrambledWord(word));
      setIsPlayOn(false);
    } else {
      setMessage("Incorrect, try again!");
      setClassName("text-red-500");
    }
  };

  const constructScrambledWord = (word: string) => {
    const shuffledArray = word.split("");
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray.join("");
  };

  const handleStartGame = (e: any) => {
    e.preventDefault();
    setIsPlayOn(true);
    setInputValue("");
    setMessage("");
    const word = selectWord();
    setCorrectWord(word.toUpperCase());
    setScrambledWord(constructScrambledWord(word));
  };
  useEffect(() => {
    let clearMessage: any;
    if (message) {
      clearMessage = setTimeout(() => setMessage(""), 2000);
    }
    return () => {
      if (clearMessage) {
        clearTimeout(clearMessage);
      }
    };
  }, [message]);
  return (
    <form className="rounded">
      <div className="flex flex-col w-2/3 h-screen items-center justify-center mx-auto p-0 sm:p-5 rounded-lg">
        <div className="relative flex flex-col h-[50%] w-[100%] sm:h-[40%] sm:w-[100%] bg-gray-300 items-center justify-evenly rounded-lg">
          {Boolean(message) && (
            <div className="absolute mx-auto my-auto p-1 text-3xl text-white flex items-center justify-center">
              <p className={`p-1 border-none outline-none ${className}`}>
                {message}
              </p>
            </div>
          )}
          <h1 className="w-full bg-blue-500 text-white flex items-center mt-[-65px] h-[2rem] justify-center text-lg border uppercase tracking-widest rounded-t-lg">
            Developer Terms Worm Scramble
          </h1>

          <div>
            {isPlayOn ? (
              <>
                <div className="flex flex-col align-center justify-center items-center">
                  <div className="flex flex-row">
                    {correctWord.split("").map((el, i) => (
                      <span
                        className="m-1 flex bg-gray-400 w-[23px] h-[23px] sm:w-[30px] sm:h-[30px] sm:m-3 items-center text-center justify-center"
                        key={`${el}_${i}`}
                      >
                        {inputValue[i]}
                      </span>
                    ))}
                  </div>
                  <p className="flex items-center text-lg uppercase mt-2 text-black">
                    {scrambledWord}
                  </p>
                </div>
                <div className="mb-10 mt-5">
                  <input
                    type="text"
                    placeholder="Guess the word..."
                    value={inputValue}
                    onChange={handleInputChange}
                    className="border text-white border-gray-800 focus:outline-none px-3 py-2 rounded-lg bg-slate-600"
                  />
                  <input
                    className="w-20 uppercase text-white p-[3px] ml-2 rounded-lg px-3 py-2 bg-blue-500 cursor-pointer"
                    type="submit"
                    onClick={handleClick}
                    value="Enter"
                  />
                </div>
              </>
            ) : (
              <div className="w-full flex text-white">
                <button
                  onClick={handleStartGame}
                  className="w-[200px] p-[2x] uppercase bg-slate-800 rounded-lg"
                >
                  Start Game
                </button>
              </div>
            )}

            {isPlayOn && (
              <div className="w-full flex text-center items-center justify-center text-white">
                <button
                  onClick={handleStartGame}
                  className="w-[200px] p-[2px] uppercase bg-slate-800 rounded-lg py-2 hover:bg-green-700 hover:transition-all hover:transition-5000"
                >
                  New Game
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};
