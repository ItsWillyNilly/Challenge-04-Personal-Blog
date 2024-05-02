let icon = document.getElementById("dark-mode-toggle");

/**
 * Handles the page load event.
 */
const handlePageLoad = function () {
  // Retrieve the dark mode status from local storage
  const darkStatus = localStorage.getItem("darkmode");
  console.log("darkStatus", darkStatus);

  // Check if dark mode is enabled
  if (darkStatus == "true") {
    // Update the icon and apply the dark mode class to the body
    icon.innerHTML = "🌒";
    document.body.classList.add("dark-mode");
    console.log("dark mode", "enabled", darkStatus);
  } else {
    // Update the icon to indicate that dark mode is disabled
    icon.innerHTML = "🌕";
    console.log("dark mode", "disabled", darkStatus);
  }
};

/**
 * Handles the click event for the toggle button.
 */
const handleToggleClick = function () {
  // Toggles the "dark-mode" class on the document body and returns a boolean indicating if the class was added or removed.
  const toggle = document.body.classList.toggle("dark-mode");
  console.log("toggle", toggle);

  // Updates the icon and stores the dark mode state in the local storage based on the toggle value.
  if (toggle) {
    icon.innerHTML = "🌒";
    localStorage.setItem("darkmode", true);
    console.log("Dark Mode Enabled");
  } else {
    icon.innerHTML = "🌕";
    localStorage.setItem("darkmode", false);
    console.log("Dark Mode Disabled");
  }
};

icon.addEventListener("click", handleToggleClick);

window.addEventListener("load", handlePageLoad);
