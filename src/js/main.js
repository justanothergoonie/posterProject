console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

var scene = document.getElementById("scene");
var parallax = new Parallax(scene, {
  invertX: false,
  scalarX: 30,
  scalarY: 10
});
const twinkle = stars => {
  // let stars = document.getElementsByClassName("star");
  stars = Array.from(stars);

  for (let i = stars.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = stars[i];
    stars[i] = stars[j];
    stars[j] = temp;
  }

  let i = 0;
  let previousStar;
  const cycleTwinkle = () => {
    if (i == stars.length - 1) {
      i = 0;
    } else {
      i++;
    }
    if (i !== 0) {
      previousStar = stars[i - 1];
    }
    let star = stars[i];

    star.classList.add("twinkle");

    if (previousStar.classList) {
      previousStar.classList.remove("twinkle");
    }
  };

  window.setInterval(cycleTwinkle, 300);
};

setInterval(twinkle(document.getElementsByClassName("star")), 3000);
setInterval(twinkle(document.getElementsByClassName("starTwo")), 3000);
// twinkle();
