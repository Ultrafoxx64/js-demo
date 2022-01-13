
//Cute Cats//
var Kitties = [
    '<img id="Cat1" src="doofus.jpeg"/>',
    '<img id="Cat2" src="cat.jpg"/>'
];


const showCat = () => {
    var randomCats = Kitties[Math.floor(Math.random()*Kitties.length)];
    document.getElementById("message").innerHTML = randomCats;
    }


//Anxiety Tips//
var aTip = [
   "1. Close your mouth and inhale quietly through your nose to a mental count of four.<br>2. Hold your breath for a count of seven.<br>3. Exhale completely through your mouth, making a whoosh sound to a count of eight.",
    "Grounding Exercise: <br> 1.Acknowledge FIVE things you see around you. <br> 2.Touch FOUR things around you.<br> 3:Listen for THREE things you hear.  <br> 4:Identify TWO things you can smell.<br> 5.Acknowledge ONE thing you can taste.",
    "Steady your breath."
];
  

const anxietyTip = () => {
    var randomTip = aTip[Math.floor(Math.random()*aTip.length)];
document.getElementById("message").innerHTML = randomTip;
}


//Surprise Me//
const surpriseMe =() => {
    var decision = Math.floor(Math.random()*2);
    if(decision===0) {
        showCat();
    }
    if(decision===1){
        anxietyTip();
    }
}