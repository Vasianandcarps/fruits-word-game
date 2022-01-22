window.onload= function (){
   
    let words = ["apple", "pear", "peach","mango", "lemon","kiwi"];
    
let images = document.getElementsByTagName("img");
gen(words);
for (let i = 0 ; i<images.length; i++){
    images[i].onclick=check
    function check(event){
    let image = event.target
    let word = image.id 
    let q = prompt("input name of fruit");
    if (q == words[i]) {
      alert("Right!");
    } else {
      alert("Try again!");
    }
  
}
}
 function gen(words){
    
    
 for(let j=0;j<3;j++){
    document.write('<img id="'+words[getRandomInt(7)]+'" src="img/'+words[getRandomInt(7)]+'.png" width="150">');
 }
//  for(let k=0;k<1;k++){
//     document.write('<img id="'+words[getRandomInt(3,5)]+'" src="img/'+words[getRandomInt(3,5)]+'.png" width="150">');
//  }    
//  for(let m=0;m<1;m++){
//     document.write('<img id="'+words[getRandomInt(5,7)]+'" src="img/'+words[getRandomInt(5,7)]+'.png" width="150">');
//  } 
    //  function getRandomInt(min,max) {
    //     return Math.floor(Math.random() * (max - min) + min);
    //   }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
     
        
}
}
// for (let i=0;i<words.length;i++){
   

//     }
// for (let i=0;i<words.length;i++){
//     document.write('<img id="'+words[i]+'" src="img/'+words[i]+'.png" width="150">');
// }