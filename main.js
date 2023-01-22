const d = new Date();
let time = d.getHours();
let collection = document.getElementById("helloMessage")
let ran = Math.floor(Math.random() * 14);
const greetingsMorning = ["Guten Morgen!", "Good Morning!","早上好!","อรุณสวัสดิ์","Bonjour!","jó Reggelt kívánok!","Dzień dobry!","God morgen!","Miremengjes!","Buongiorno!","Buenos días!","Goeiemoarn!","おはよう!","صباح الخير!","hyvää huomenta"]
const greetingsAfternoon = ["Guten Aben!","Good Afternoon!","こんにちは!","下午好!","สวัสดีตอนบ่าย","Bonne après-midi!","طاب مسائك!","jó napot","dobry wieczór","God ettermiddag","Mirembrema","buon pomeriggio","buena tarde","goeiemiddei","hyvää ilta"]

console.log(time)
if(time <= 11){
    collection.innerHTML = greetingsMorning[ran] 
}
else{
    collection.innerHTML = greetingsAfternoon[ran]
}

