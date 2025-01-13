import { useState, useEffect } from "react";

const useQuote = (isClicked) => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/PriteshThorat/58eb970a5693c418dd62218d2bfa7bf5/raw/a68e5facadaad4457656d0c771a9c01e957fc533/quotes.json')
      .then(res => res.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
      })
      .catch(err => console.log(err));
  }, [isClicked]);

  return quote;
};

export default useQuote;