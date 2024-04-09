let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let reset = document.querySelector(".reset");
let counterValue = document.querySelector(".counterValue");
let button = document.getElementsByClassName("buttons")
let counter = 0;

const displayColor = () => {
    //if number is negative it will be red
    if (counter < 0) {
      counterValue.className = "negative";
    } //if number is positive it will be green
    else if (counter > 0) {
      counterValue.className = "positive";
    }
    //if number is zero it will be coral
    else {
      counterValue.className = "display";
    }
  };


increment.addEventListener("click" , ()=> {
    counter++;
    counterValue.innerText = counter;
    displayColor();
})
;
decrement.addEventListener("click" , ()=> {
    counter--;
    counterValue.innerText = counter;
    displayColor();
})
reset.addEventListener("click" , ()=> {
    counter = 0;
    counterValue.innerText = counter;
    displayColor();
})


