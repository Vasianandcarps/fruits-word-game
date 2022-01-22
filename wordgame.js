window.onload = function () {
  let words = ["apple", "pear", "peach", "mango", "lemon", "kiwi"];

  let images = document.getElementsByTagName("img");
  gen(words);
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = check;
    function check(event) {
      let image = event.target;
      let word = image.id;
      let q = prompt("input name of fruit");
      if (q == word) {
        alert("Right!");
      } else {
        alert("Try again!");
      }
    }
  }
  function gen(words) {
    for (let j = 0; j < 3; j++) {
      let fruit = getRandomInt(7);
      document.write(
        '<img id="' +
          words[fruit] +
          '" src="img/' +
          words[fruit] +
          '.png" width="150">'
      );
    }

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
  }
};
