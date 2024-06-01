// this one is jut to wait for the page to load
document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');
    if(storedTheme){
        themeStylesheet.href = storedTheme;
    }
    const light_button = document.getElementById("theme-toggle-light");
    light_button.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'dark_mode.css';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'light_mode.css';
        }
        // save the preference to localStorage
        localStorage.setItem('theme',themeStylesheet.href)
    })
    const dark_button = document.getElementById("theme-toggle-dark");
    dark_button.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'dark_mode.css';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'light_mode.css';
        }
        // save the preference to localStorage
        localStorage.setItem('theme',themeStylesheet.href)
    })
})
