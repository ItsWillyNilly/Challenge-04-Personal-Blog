let icon = document.getElementById("dark-mode-toggle");
//get each card from the DOM and save it to an array


// console.log("array of elements 0", cards.length);
 
/**
 * Handles the page load event.
 */
const handlePageLoad = function () {
  // Retrieve the dark mode status from local storage
  const darkStatus = localStorage.getItem("darkmode");
  console.log("darkStatus", darkStatus);

  // console.log("array of elements 1", cards.length);

  // Check if dark mode is enabled
  if (darkStatus == 'true') {
    // Update the icon and apply the dark mode class to the body
    icon.innerHTML = "🌒";
    document.body.classList.add("dark-mode");

    //go through the array of cards and add the card-dark-mode class to each card
    const cards = document.querySelectorAll(".card");

    for(var i = 0; i < cards.length; i++){  
      cards[i].classList.add("card-dark-mode");
      cards[i].classList.remove("card");
      // console.log("array of elements 2", cards.length, cards[i]);
    }

    // console.log("dark mode", "enabled", darkStatus);
  } else {
    // Update the icon to indicate that dark mode is disabled
    icon.innerHTML = "🌕";
    // console.log("dark mode", "disabled", darkStatus);
  }
};

/**
 * Handles the click event for the toggle button.
 */
const handleToggleClick = function () {
  // Toggles the "dark-mode" class on the document body and returns a boolean indicating if the class was added or removed.
  const toggle = document.body.classList.toggle("dark-mode");

  // console.log("toggle", toggle);

  // Updates the icon and stores the dark mode state in the local storage based on the toggle value.
  if (toggle) {
    icon.innerHTML = "🌒";
    localStorage.setItem("darkmode", true);

    // console.log("Dark Mode Enabled");
    const cards = document.querySelectorAll(".card");
    for(var i = 0; i < cards.length; i++){  
      cards[i].classList.add("card-dark-mode");
      cards[i].classList.remove("card");
    }
  } else {
    icon.innerHTML = "🌕";
    localStorage.setItem("darkmode", false);
    document.body.classList.remove("dark-mode");
    // console.log("Dark Mode Disabled");

    const cards = document.querySelectorAll(".card-dark-mode");
    for(var i = 0; i < cards.length; i++){  
      cards[i].classList.remove("card-dark-mode");
      cards[i].classList.add("card");
    }
  }
};

icon.addEventListener("click", handleToggleClick);

window.addEventListener("load", handlePageLoad);
