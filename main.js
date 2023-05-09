const d = new Date();
let time = d.getHours();
let collection = document.getElementById("helloMessage")
let Physics = document.getElementById("Physics")
let money = document.getElementById("money")
const container = document.getElementById('image-container1');
let ran = Math.floor(Math.random() * 14);
var prevScrollpos = window.pageYOffset;

const greetingsMorning = ["Guten Morgen!", "Good Morning!","早上好!","อรุณสวัสดิ์","Bonjour!","jó Reggelt kívánok!","Dzień dobry!","God morgen!","Miremengjes!","Buongiorno!","Buenos días!","Goeiemoarn!","おはよう!","صباح الخير!","hyvää huomenta","доброе утро"]
const greetingsAfternoon = ["Guten Aben!","Good Afternoon!","こんにちは!","下午好!","สวัสดีตอนบ่าย","Bonne après-midi!","طاب مسائك!","jó napot","dobry wieczór","God ettermiddag","Mirembrema","buon pomeriggio","buena tarde","goeiemiddei","hyvää ilta","добрый день"]
const PhysicsLang = ["Physik","Physics","物理","物理","ฟิสิกส์","la physique","fysikk","fizyka","الفيزياء","физика","física","भौतिक विज्ञान","물리학","Physica","the thing newton invented"]

console.log(time)
if(time <= 11 && collection != null){
    collection.innerHTML = greetingsMorning[ran] 
}
else if (time >= 12 && collection != null){
    collection.innerHTML = greetingsAfternoon[ran]
}
if(Physics != null){
  Physics.innerHTML = PhysicsLang[ran]
}

if(money != null){
  function updateValue() {
    let d = new Date();
    // Compute the value to display
    var value = "£" + (d.getTime() / 10000+ Math.floor(Math.random() * 10)).toFixed(2);

    // Add a CSS class to trigger the animation
    money.classList.add("fade-in");

    // Set the contents of the element to the computed value
    money.innerHTML = value;

    // Remove the CSS class after the animation is complete
    setTimeout(function() {
      money.classList.remove("fade-in");
    }, 500); // This value should match the duration of the CSS transition
  }

  // Update the value initially
  updateValue();

  // Update the value every second
  setInterval(updateValue, 1000);
}
  

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbar").style.top = "0";
    } else {
      document.querySelector(".navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }

  

  
