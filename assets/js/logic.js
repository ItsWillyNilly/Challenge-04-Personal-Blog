// dark mode toggle function
function darkMode() {

// initializes darkModeSwitcher and sets the value to the document body and toggles the 'dark-mode' CSS style found in style.css
    let darkModeSwitch = document.body;
    darkModeSwitch.classList.toggle("dark-mode");

// initializes icon as "document.getElementById("dark-mode-toggle")". It looks for the element with the id of 'dark-mode-toggle'
    let icon = document.getElementById("dark-mode-toggle");

// then does a check to see if it has a class of 'dark-mode' and switches to light mode if it doesn't or dark mode if it does
    if (darkModeSwitch.classList.contains('dark-mode')){
        icon.innerHTML = '🌒';
    }
    else {
        icon.innerHTML = '🌕';
    }
}


