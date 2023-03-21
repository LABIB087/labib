alert("This site is not responsive");

var bar = document.getElementById("bars");

var menu = document.getElementById("menu");

bar.addEventListener('click',()=>{
    if (menu.className === 'hidden') {
        menu.classList.remove('hidden');
    }
    else{
        menu.classList.add('hidden');
    }
});
