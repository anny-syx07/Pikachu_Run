var pikachu = document.getElementById("pikachu");
var pokeball = document.getElementById("pokeball");
var counter=0;
function jump(){
    if(pikachu.classList == "animate"){return}
    pikachu.classList.add("animate");
    setTimeout(function(){
        pikachu.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let pikachuTop = parseInt(window.getComputedStyle(pikachu).getPropertyValue("top"));
    let pokeballLeft = parseInt(window.getComputedStyle(pokeball).getPropertyValue("left"));
    if(pokeballLeft<20 && pokeballLeft>-20 && pikachuTop>=190){
        pokeball.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        pokeball.style.animation = "pokeball 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
},10);
function control(e){
    if(e.key == 'Space' || e.key == ' '){
        jump();
    }
}
document.addEventListener('keydown', control);