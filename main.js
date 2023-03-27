const d = new Date();
let time = d.getHours();
let collection = document.getElementById("helloMessage")
const container = document.getElementById('image-container1');
let ran = Math.floor(Math.random() * 14);
var prevScrollpos = window.pageYOffset;

const greetingsMorning = ["Guten Morgen!", "Good Morning!","早上好!","อรุณสวัสดิ์","Bonjour!","jó Reggelt kívánok!","Dzień dobry!","God morgen!","Miremengjes!","Buongiorno!","Buenos días!","Goeiemoarn!","おはよう!","صباح الخير!","hyvää huomenta"]
const greetingsAfternoon = ["Guten Aben!","Good Afternoon!","こんにちは!","下午好!","สวัสดีตอนบ่าย","Bonne après-midi!","طاب مسائك!","jó napot","dobry wieczór","God ettermiddag","Mirembrema","buon pomeriggio","buena tarde","goeiemiddei","hyvää ilta"]

console.log(time)
if(time <= 11){
    collection.innerHTML = greetingsMorning[ran] 
}
else{
    collection.innerHTML = greetingsAfternoon[ran]
}

// Initialize AOS
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    easing: 'ease-in-out', // Animation easing
    delay: 100, // Delay before animations start
});
  

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbar").style.top = "0";
    } else {
      document.querySelector(".navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }

  

  
