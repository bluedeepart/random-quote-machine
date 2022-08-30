import { createContext, useEffect, useState } from "react";

const QuoteContext = createContext();

export const QuoteContextProvider = ({ children }) => {
  const [randomColor, setRandomColor] = useState();
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();

  const url = "https://api.quotable.io/random";

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

  const randomQuoteGenerator = async () => {
    /* Random Quote Generator */
    colorGenerator();
    
    const res = await fetch(url);
    const quote = await res.json();
    setQuote(quote.content);
    setAuthor(quote.author);

  };

  // const randomQuoteGenerator = () => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setQuote(data.content);
  //       setAuthor(data.author);
  //     })
  //     .catch((err) => console.log(err));

  //   /* Random Quote Generator */
  //   colorGenerator();
  // };

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
