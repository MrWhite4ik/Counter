let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let reset = document.querySelector("#reset");
let counterValue = document.querySelector("#counterValue");
let button = document.getElementById("buttons")
let counter = 0;

const displayColor = () => {
    //if number is negative it will be red
    if (counter < 0) {
      counterValue.id = "negative";
    } //if number is positive it will be green
    else if (counter > 0) {
      counterValue.id = "positive";
    }
    //if number is zero it will be coral
    else {
      counterValue.id = "display";
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


