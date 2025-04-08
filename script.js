let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let newQuote = document.querySelector(".new-quote");
let copyQuote = document.querySelector(".copy-quote");

let list = [
  { qotes1: " So many books, so little time.",
    author: "Frank Zappa"
   },
  { qotes2:"Success is not final,failure is not fatal: It is the courage to continue that counts.",
    author: "Frank Zappa"

  },
  { qotes3: " Be yourself; everyone else is already taken." ,
    author: "Oscar Wilde"

  },
  { qotes4: " I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." ,
    author: "Marilyn Monroe"
  },
];

newQuote.addEventListener("click", () => {

  var i = list[Math.floor(Math.random() * list.length)];
  quote.innerText = Object.values(i)[0];
  author.innerText = Object.values(i)[1];
});

function copy(){

  let text = document.querySelector('.quote').innerText;

  navigator.clipboard.writeText(text)
  .then(()=>{
    alert("The quote is copied!");
  })
  .catch(()=>{
    alert("The quote is Not Copied!");
  })
};
