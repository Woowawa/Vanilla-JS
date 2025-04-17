const quotes = [
    {
        quote: "불가능한 일은, 아직 일어나지 않은 일에 불과하다.",
        author: "스타레일 아케론",
    },
    {
        quote: "새장 밖의 세상이 아름답지 않다는 걸 알면서도... 사람들은 보고 싶어 한다고요.",
        author: "스타레일 클라라",
    },
    {
        quote: "생명은 왜 깊은 잠에 빠지는가?... 언젠가 우린... 꿈에서 깨어날 거니까",
        author: "스타레일 개척자",
    },
    {
        quote: "선한 천성을 가지고 태어나는 것, 혹은 거대한 노력으로 악한 천성을 극복하는 것, 어느 쪽이 더 위대한가",
        author: "엘더스크롤 5: 스카이림",
    },
    {
        quote: "진실을 폭로하는 것은 때로는 비극을 이끌어 낸다. 허나, 그 이상의 비극이 존재하지. 그건 바로 진실로부터 눈을 돌리는 것이다.",
        author: "역전재판",
    },
    {
        quote: "잊지 말거라. 세상을 보이는 그대로 받아들이지 말고, 가능성을 봐야 한다는 걸...",
        author: "Overwatch",
    },
    {
        quote: "남에게 준 상처는 자신에게 되돌아오는 법. 꽃이 피려면 적당한 자극이 필요한 법이야.",
        author: "LoL 아이번",
    },
    {
        quote: "승리는 거저 주어지지 않소. 분노는 목적 없는 충동을 일으킬 뿐이오. 자만심에 눈이 멀지 않도록 하시오. 가장 무서운 적은 의혹이오.",
        author: "LoL 마스터이",
    },
    {
        quote: "Time crumbles things; everything grows old and is forgotten under the power of time.",
        author: "Aristotles",
    },
    {
        quote: "When you realize how perfect everything is, you will  tilt your bead back and laugh at the sky.",
        author: "Gautama Buddha",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[ Math.floor(Math.random() * quotes.length) ];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
