
let player1;
let player2;
var a=["rock","hand","scissor"];
function Game(){
  // Generate two random numbers in the range of 1 - 3

  let random1 =a[ Math.floor(Math.random() * 3)]; // 1-3
  let random2 = a[Math.floor(Math.random() * 3)]; // 1-3
  let b=document.createElement("img");
  b.id=a[i];
  b.src=a[i]+".png";
  b.addEventListener("click",reload);
  b.addEventListener("click",result);
  document.getElementById("a").append(b);
  }

  function reload()
  {
  player1=a[Math.floor(Math.random() * 3)];
  document.getElementById("player-1").src ="img/"+ player1 + ".png";
  player2=a[Math.floor(Math.random() * 3)];
  document.getElementById("player-2").src = "img/"+ player2 + ".png";
  }
  function P(player1,player2){
 if(player1 == player2){
  document.write("Tie");
}
else if(player1 == "rock"){
  if(player2 == "paper"){
    document.write("player2 Won");

  }else{
    document.write("Player1 Won");
  }
}
else if(player1 == 'scissors'){
  if(player2 == 'rock'){
    document.write('player2 Won');
  }else{
    document.write('Player1 Won');
  }
}
else if(player1 == 'paper'){
  if(player2 == 'scissors'){
    document.write('player2 won');
  }else{
    document.write('Player1 Won');
  }
}
  }
function res(result){
const resultDiv=document.getElementById("result");
resultDiv.textContent=result;
}
console.log(p);
  
/*
  // Assign the appropriate image
  //let randomImageName = "rock.png" // Update this randomly
  // let ImageSource1 = "img/rock.png"; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png

  //randomImageName = "hand.png" // Update this randomly
  //let ImageSource2 = "img/paper.png"; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png
  
 // randomImageName = "hand.png" // Update this randomly
 // let ImageSource3 = "img/scissor.png"; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png
  
  // Update images
  //document.querySelectorAll("img")[0].setAttribute("src", "img/hand.png");
  //document.querySelectorAll("img")[1].setAttribute("src", "img/paper.png");
  //document.querySelectorAll("img")[2].setAttribute("src", "img/scissor.png");

  // Print the winner. Use if statement or other appropriate logic.
 // document.querySelector("h1").innerHTML = "Play 2 Wins!";

*/