document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here
    const box = document.getElementsByClassName('box')[0];
    const btn = document.getElementById('generate');
    const txt = document.getElementById('txt');

    btn.addEventListener("click", function(){
        const randomColor = Math.floor(Math.random() * 25677215).toString(16);
        box.style.backgroundColor = "#" + randomColor;
        txt.innerHTML = "#" + randomColor;
    });
});
