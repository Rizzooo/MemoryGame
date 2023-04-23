const startBtn = document.querySelector("button#start");
const resetBtn = document.querySelector("button#reset");

startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", function() {
  window.location.reload();
});

function startGame() {
  const gameContainer = document.getElementById("game");

  const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "purple"
  ];

  // here is a helper function to shuffle an array
  // it returns the same array with values shuffled
  // it is based on an algorithm called Fisher Yates if you want ot research more

  function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  let shuffledColors = shuffle(COLORS);

  // this function loops over the array of colors
  // it creates a new div and gives it a class with the value of the color
  // it also adds an event listener for a click for each card
    function createDivsForColors(colorArray) {
      for (let color of colorArray) {
        // create a new div
        const newDiv = document.createElement("div");

        // give it a class attribute for the value we are looping over
        newDiv.classList.add(color);
        newDiv.classList.add("card");
        // call a function handleCardClick when a div is clicked on
        newDiv.addEventListener("click", handleCardClick);

        // append the div to the element with an id of game
        gameContainer.append(newDiv);
      }
    }

    // TODO: Implement this function!
    let clickCount = 0;
    function handleCardClick(event) {
      // you can use event.target to see which element was clicked
      if (event.target.classList.contains("clicked")) {
        alert("Please select a different card");
      }
      console.log("you just clicked", event.target);
      clickCount++;
      event.target.style.backgroundColor = `${event.target.classList[0]}`;
      let allCards = Array.from(document.querySelectorAll(`div.card`));
      // const changeCard = localStorage.setItem("clicked", event.target.classList.toggle("clicked"));
      // const removeClicks = allCards.forEach(card => {
      //   card.removeEventListener("click", handleCardClick);
      // });
      // const addClicks = allCards.forEach(card => {
      //   card.addEventListener("click", handleCardClick);
      // })
      const setFirstChoice = ("firstChoice", event.target.classList[0]);
      const changeCard = ("clicked", event.target.classList.toggle("clicked"));
      changeCard;
      setFirstChoice;
      // Use local storage to save previous click
      // Match previous click color
      // Make permenant and unclickable if match
      // Remove background color (1000ms then fade) and remove 'clicked' from classList if not a match
      // Clear local storage
      
      if (clickCount === 2) {
        // if (clickCount > 2) {
        //   alert("Stop");
        //   // removeClicks;
        // }
        let selections = document.querySelectorAll("div.clicked");
        let selectionsArray = Array.from(document.querySelectorAll("div.clicked"));
        console.log(selections[0], selections[1]);
        if (selections[0].classList[0] === selections[1].classList[0]) {
          console.log("Correct!");
          selectionsArray.forEach(element => {
            console.log(element);
            element.classList.remove("card");
            element.classList.remove("clicked");
            element.removeEventListener("click", handleCardClick);
          });
          } else {
            console.log("Sorry, try again.");
            setTimeout(function() {
            selections[0].classList.remove("clicked");
            selections[0].style.backgroundColor = "";
            selections[1].classList.remove("clicked")
            selections[1].style.backgroundColor = "";
          }, 1000);
          // addClicks;
          }
        clickCount = 0;
      }

    }

    // when the DOM loads
    createDivsForColors(shuffledColors);
 }
