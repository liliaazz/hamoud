var selecto = document.getElementById('selecto');
var mainImg = document.getElementsByClassName("soda")
var hamoud = document.getElementById('hamoud');
var body = document.getElementById('id')
var slim_vert = document.getElementById('slim_vert')
var slim_orange = document.getElementById('slim_orange')
var flavor = document.getElementById('flavor')
var ic_flavor = document.getElementById('ic_flavor')

slim_vert.addEventListener('click', function(){
    diplayImage('images/slim_vert.png', 'lemon', 'images/ic_lemon.svg')
    slim_vert.style.transform = `translateY(-10px)`;
  
    // Reset the position after the animation is complete
    setTimeout(() => {
      image.style.transform = "";
    }, 300);
})


slim_orange.addEventListener('click', function(){
    diplayImage('images/slim_orange.png', 'orange', 'images/ic_orange.svg')

    slim_orange.style.transform = `translateY(-10px)`;
  
    // Reset the position after the animation is complete
    setTimeout(() => {
      image.style.transform = "";
    }, 300);
})


selecto.addEventListener('click', function(){
    diplayImage('images/selecto.png', 'coke', 'images/ic_coke.svg')
    selecto.style.transform = `translateY(-10px)`;
  
    // Reset the position after the animation is complete
    setTimeout(() => {
      image.style.transform = "";
    }, 300);
})



hamoud.addEventListener('click', function(){
    diplayImage('images/hamoud.png', 'lemon', 'images/ic_lemon.svg')
    hamoud.style.transform = `translateY(-10px)`;
  
    setTimeout(() => {
      image.style.transform = "";
    }, 300);
})




function diplayImage(link, taste, icon){

    flavor.textContent = taste + ' flavor'
    ic_flavor.src = icon

    for(let i = 0; i < mainImg.length; i++){

        mainImg[i].src = link

    }
}

