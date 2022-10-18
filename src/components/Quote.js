import React from "react";
import "../styles/Quote.css";
import { useState, useEffect } from "react";

const Quote = () => {
  const [hoverQuote, setHoverQuote] = useState(false);
  const [quoteData, setQuoteData] = useState([]);
  const [quoteLoading, setQuoteLoading] = useState(true);

   //Quotes

  
 
  
  //fetch quote from api
  const fetchQuote = () => {

     const months = ["Over 2 billion people’s livelihoods depend on forests.", "Forests are home to 300 million people around the world.", "Trees planted sequester CO2 at an average of 25 kilos per tree per year; or an average of 250 kilos over a tree’s lifetime.", "There are more than 60,000 species of trees in the world.", "More than a quarter of modern medicines originate from tropical forest plants.", "Forests are home to 80% of the world’s terrestrial biodiversity.", "Tropical deforestation contributes 20% of annual global green-house pas emissions.", "13 million forests provide jobs to more than 13 million people across the world.", "80% of Europe used to be forested land, but only 34% of it remains today.", "40% of the world’s oxygen is produced from rainforest.", "Forests support over 86 million green jobs and the livelihoods of millions of other. More than 90% of those who live in extreme poverty are forest-dependent.", "25% of our carbon emissions have historically been captured by Earth’s forests, farms, and grasslands to keep the landscapes vegetates and soil hydrated."];

var random = Math.floor(Math.random() * months.length);
    var RandomQuote = (random, months[random])

    
    const data = {
    "id": 0,
    "language_code": "en",
    "content": RandomQuote,
    "url": "https://www.ecomatcher.com/tree-resources/",
    "originator": {
        "id": 0,
        "name": "EcoMatcher",
        "url": "https://www.ecomatcher.com/tree-resources//"
    },
    "tags": [
        "Trees",
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
