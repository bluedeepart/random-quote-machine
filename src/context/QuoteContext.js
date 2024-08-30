import jsonData from '../quotes.json';
import { createContext, useEffect, useState } from "react";
const QuoteContext = createContext();


export const QuoteContextProvider = ({ children }) => {
  const [randomColor, setRandomColor] = useState();
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();

  // const url = "https://api.quotable.io/random";
  // const url = '../quotes.json';

  useEffect(() => {
    const getQuote = setTimeout(() => {
      randomQuoteGenerator();
    }, 300);

    return () => {
      clearTimeout(getQuote);
    };

    // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
  }, []);

  /* HSL color generator */
  const colorGenerator = () => {
    let h = Math.floor(Math.random() * 360);
    let s = 35;
    let l = 50;

    // console.log(`hsla(${h}, ${s}%, ${l}%, 1)`);
    setRandomColor(`hsla(${h}, ${s}%, ${l}%, 1)`);
  };

  /* Random Quote Generator */
  const randomQuoteGenerator = async () => {
    colorGenerator();
    
    const randomNumber = Math.floor(Math.random() * 102) + 1;
    const data = jsonData.quotes[randomNumber];
    setAuthor(data.author);
    setQuote(data.quote);
  };

  return (
    <QuoteContext.Provider
      value={{
        randomColor,
        quote,
        author,
        randomQuoteGenerator,
      }}>
      {children}
    </QuoteContext.Provider>
  );
};

export default QuoteContext;
