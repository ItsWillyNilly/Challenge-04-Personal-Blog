let darkmode = localStorage.getItem('darkmode');
let icon = document.getElementById("dark-mode-toggle");

if(localStorage.getItem('darkmode' == 'enabled')) {
    document.body.classList.add('dark-mode');
}

icon.addEventListener('click', function(event) {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')){
        
        icon.innerHTML = '🌒';
        localStorage.setItem('darkmode', 'enabled')
    
        console.log(darkmode, "Enabled");
    }
    else {
        icon.innerHTML = '🌕';
        localStorage.setItem('darkmode', null);

        console.log(darkmode, "Disabled");
    }
});


