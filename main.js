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

//This is the code of project path

const food_website = document.getElementById('food');

const ecommerce_website = document.getElementById('ecommerce');

const calculator_website = document.getElementById('calculator');


food_website.addEventListener('click', function() {
  location.assign("https://labib087.github.io/Restaurant/");
});

ecommerce_website.addEventListener('click', function() {
  location.assign("https://labib087.github.io/Labib_Express/");

});

calculator_website.addEventListener('click',function(){
  location.assign("https://labib087.github.io/calculator/")
});
