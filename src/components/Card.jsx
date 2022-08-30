import { useContext } from "react";
import Button from "./Button";
import IconBox from "./IconBox";
import { FaTwitter, FaTumblr } from "react-icons/fa";
import RandomQuote from "./RandomQuote";
import QuoteContext from "../context/QuoteContext";

const Card = () => {
  const quoteCtx = useContext(QuoteContext);
  const { randomColor, randomQuoteGenerator, quote, author } = quoteCtx;

  const tweetText = `"${quote}"+${author}+%23quotes`;

  return (
    <div
      className="bg-color-white p-5 sm:p-8 lg:px-14 lg:py-12 rounded-md max-w-xl lg:w-3/6 mb-5 last:mb-0"
      id="quote-box"
      style={{ color: randomColor }}>
      <RandomQuote />
      <div className="flex items-start justify-between flex-wrap">
        <div>
          <IconBox
            randomColor={randomColor}
            id="tweet-quote"
            link={`https://twitter.com/intent/tweet?text=${tweetText}`}
            title="Tweet this quote!"
            target="_blank">
            <FaTwitter />
          </IconBox>
        
          <IconBox
            randomColor={randomColor}
            link={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${author}&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons`}
            title="Post this quote on tumblr!"
            target="_blank">
            <FaTumblr />
          </IconBox>
          
        </div>
        <Button click={randomQuoteGenerator} randomColor={randomColor}>
          New Quote
        </Button>
      </div>
    </div>
  );
};

export default Card;
