import { useState } from "react";
import useQuote from "../hooks/useQuote";

const Box = () => {
  const [isClicked, setIsClicked] = useState(Math.random());

  const quote = useQuote(isClicked);

  const handleClick = () => {
    setIsClicked(Math.random());
  };

  return (
    <>
      <div
        className="text-lg font-semibold text-white"
        id="text" >
        {quote.quoteText}
      </div>
      <div
        className="text-md text-gray-400 italic"
        id="author" >
        {quote.quoteAuthor}
      </div>
      <button
        id="new-quote"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleClick}
      >New Quote</button>
      <div >
        <button>
          <a id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${quote.quoteText} - ${quote.quoteAuthor}`}
            target="_top"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline" >
            <i className="fab fa-twitter"></i> Tweet
          </a>
        </button>
      </div>
      <div className="mt-4">
        <a
          href="https://github.com/PriteshThorat/Build-a-Random-Quote-Machine"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Source Code
        </a>
      </div>
    </>
  );
};

export default Box;