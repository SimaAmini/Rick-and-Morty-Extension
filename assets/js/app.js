let quotes;
let qText = document.querySelector(".quote-text");
let qCharacter = document.querySelector(".quote-character");
let Button = document.querySelector(".new-quote");

random = list => {
  return list[Math.floor(Math.random() * list.length)];
};

//  Read from json file
loadJSON = callback => {
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open(
    "GET",
    "https://raw.githubusercontent.com/SimaAmini/Rick-and-Morty-Quotes-Chrome-Extension-NewTab/master/quotes.json",
    true
  );
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
};

getQuotes = () => {
  loadJSON(function(response) {
    quotes = JSON.parse(response);
    renderQuote();
  });
};
renderQuote = () => {
  const quote = random(quotes);
  qText.innerHTML = quote.text;
  qCharacter.innerHTML = "-" + quote.character;
};

Button.addEventListener("click", function() {
  renderQuote();
});

getQuotes();
