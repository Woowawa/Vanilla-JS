const images = [
    "01.jpg",
    "02.jpg",
    "03.png"
];

const todaysImage = images[ Math.floor(Math.random() * images.length) ];

const bgImage = document.createElement("img");

bgImage.src = `IMG/${todaysImage}`;

document.body.prepend(bgImage);