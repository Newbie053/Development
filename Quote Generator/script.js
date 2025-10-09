let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [
  {
    quote: `"I do the very best I know how - the very best I can; and I mean to keep on doing so until the end."`,
    person: "Abraham Lincoln"
  },
  {
    quote: `"The only way to do great work is to love what you do."`,
    person: "Steve Jobs"
  },
  {
    quote: `"In the middle of every difficulty lies opportunity."`,
    person: "Albert Einstein"
  },
  {
    quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    person: "Winston Churchill"
  },
  {
    quote: `"Happiness depends upon ourselves."`,
    person: "Aristotle"
  },
  {
    quote: `"It always seems impossible until it’s done."`,
    person: "Nelson Mandela"
  },
  {
    quote: `"Don’t count the days, make the days count."`,
    person: "Muhammad Ali"
  },
  {
    quote: `"Be yourself; everyone else is already taken."`,
    person: "Oscar Wilde"
  },
  {
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    person: "Eleanor Roosevelt"
  },
  {
    quote: `"Do what you can, with what you have, where you are."`,
    person: "Theodore Roosevelt"
  },
  {
    quote: `"Life is what happens when you’re busy making other plans."`,
    person: "John Lennon"
  },
  {
    quote: `"Strive not to be a success, but rather to be of value."`,
    person: "Albert Einstein"
  },
  {
    quote: `"Your time is limited, so don’t waste it living someone else’s life."`,
    person: "Steve Jobs"
  },
  {
    quote: `"The best way to predict the future is to invent it."`,
    person: "Alan Kay"
  },
  {
    quote: `"If you want to lift yourself up, lift up someone else."`,
    person: "Booker T. Washington"
  },
  {
    quote: `"The secret of getting ahead is getting started."`,
    person: "Mark Twain"
  },
  {
    quote: `"Act as if what you do makes a difference. It does."`,
    person: "William James"
  },
  {
    quote: `"Believe you can and you're halfway there."`,
    person: "Theodore Roosevelt"
  },
  {
    quote: `"Don’t wait. The time will never be just right."`,
    person: "Napoleon Hill"
  },
  {
    quote: `"Everything you’ve ever wanted is on the other side of fear."`,
    person: "George Addair"
  }
];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    

})
