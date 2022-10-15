import React from "react";
import "../styles/Quote.css";
import { useState, useEffect } from "react";

const Quote = () => {
  const [hoverQuote, setHoverQuote] = useState(false);
  const [quoteData, setQuoteData] = useState([]);
  const [quoteLoading, setQuoteLoading] = useState(true);

   //Quotes
const greetings = ['Over 2 billion people’s livelihoods depend on forests.', 'Forests are home to 300 million people around the world.', 'Trees planted sequester CO2 at an average of 25 kilos per tree per year; or an average of 250 kilos over a tree’s lifetime.', 'There are more than 60,000 tree species in the world.'];

const greeting = "Test greeting using variable";
 console.log(greeting);
  
  //fetch quote from api
  const fetchQuote = () => {
    const data = {
    "id": 0,
    "language_code": "en",
    "content": "Over 2 billion people’s livelihoods depend on forests.",
    "url": "https://www.ecomatcher.com/tree-resources/",
    "originator": {
        "id": 0,
        "name": "EcoMatcher",
        "url": "https://www.ecomatcher.com/tree-resources//"
    },
    "tags": [
        "Life",
        "Freedom",
        "Fight",
        "day",
        "die",
        "prison",
        "prisoner"
    ]
};
    setQuoteLoading(false);
    console.log(data);
    return data;
  };

  //shortens the quote if its too long
  const shortQuote = (e) => {
    if (e.length > 250) {
      return e.substring(0, 250) + "...";
    }
    return e;
  };

  useEffect(() => {
    const getQuotes = async () => {
      const quoteFromApi = await fetchQuote();
      setQuoteData(quoteFromApi);
    };

    getQuotes();
  }, []);

  return (
    <div>
      {quoteData && (
        <div className="quoteContainer">
          <div className="blockContainer quoteBlock">
            <div className="hoverQuote" onMouseOver={() => setHoverQuote(true)} onMouseOut={() => setHoverQuote(false)}>
              {quoteLoading === true && (
                <p className="">
                  <i className="fa fa-spinner spinner2 spinLoading" aria-hidden="true"></i>
                </p>
              )}
              <div className={`quote ${hoverQuote ? "slideUp" : ""} ${quoteLoading ? "" : "fadeInAnim"} `}>
                {quoteLoading === false && <p>{quoteData && quoteData.content && shortQuote(quoteData.content)}</p>}
              </div>
            </div>
          </div>
          <div>
            <div className="blockContainer authorBlock">
              <div className="hoverQuote" onMouseOver={() => setHoverQuote(true)} onMouseOut={() => setHoverQuote(false)}>
                <div className={`author ${hoverQuote ? "slideDownFadeIn" : ""} ${quoteLoading ? "notLoaded" : ""}`}>
                  <span className={`${hoverQuote ? "TextSlideDownFadeIn" : ""}`}>
                    {quoteData && quoteData.originator && quoteData.originator.name}
                  </span>
                  <a href={quoteData.url} className={`${quoteLoading ? "notLoaded" : ""}`}>
                    <i className={`fa fa-external-link ${hoverQuote ? "TextSlideDownFadeIn" : ""}`} aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quote;
