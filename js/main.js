let my_quotes = [{
    name: "― Oscar Wilde",
    the_qoute: "“Be yourself; everyone else is already taken.”"
},
{
    name: " ― Marilyn Monroe",
    the_qoute: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`
},
{
    name: "― Frank Zappa",
    the_qoute: `“So many books, so little time.”`
},
{
    name: " ― Albert Einstein",
    the_qoute: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`
},
{
    name: " ― Marcus Tullius Cicero",
    the_qoute: `“A room without books is like a body without a soul.”`
},
{
    name: " ― Bernard M. Baruch",
    the_qoute: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`
},
{
    name: " ― William W. Purkey",
    the_qoute: `“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”`
},
{
    name: " ― Dr. Seuss",
    the_qoute: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`
},
{
    name: " ― Mae West",
    the_qoute: `“You only live once, but if you do it right, once is enough.”`
},
];
function get_random(max, min) {
    let x = Math.floor(Math.random() * (max - min + 1) + min);
    let cont = x
    for (let i = 0; i <= max; i++) {
        if (x != cont) {
            return x;
        } else {
            let x = Math.floor(Math.random() * (max - min + 1) + min);
            return x;
        }
    }
}
function add() {
    let temp = get_random((my_quotes.length - 1), 0);
    console.log(temp);
    box = ""
    box += `
        <p>${my_quotes[temp].the_qoute}</p>
        <p>${my_quotes[temp].name}</p>
        `;

    document.getElementById("my-btn").innerHTML = box;
    // console.log(Math.floor(Math.random() * 2))
}
// console.log(cont);