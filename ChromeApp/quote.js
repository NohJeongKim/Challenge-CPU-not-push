const quotes = [
  // object
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  }, // 콤마로 구분하는 것을 잊지 않기.
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "To Travel is to Live",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Never go on trips with anyone you do ntot love.",
    author: "Hemmingway",
  },
  {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "Hilaire Belloc",
  },
  {
    quote: "Travel expands the mind and fills the gap.",
    author: "Sheda Savage",
  },
];

// 일단 랜덤으로 1개를 찾아서 출력해야한다.
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
// Math.floor(Math.random()*quotes.length) 0 ~ 9 까지의 숫자가 랜덤으로 나온다.
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote; // todayQuote["quote"]
author.innerText = todayQuote.author; // todayQuote["author"]
