// ================= JAM WIB =================
function updateWIB(){
const now = new Date().toLocaleString("en-US",{timeZone:"Asia/Jakarta"});
document.getElementById("jamWIB").innerText="WIB : "+now;
}
setInterval(updateWIB,1000);
updateWIB();

// ================= SHIO DATA =================
const shioList=["Tikus","Kerbau","Harimau","Kelinci","Naga","Ular","Kuda","Kambing","Monyet","Ayam","Anjing","Babi"];

const shioNumbers={
"Kuda":["01","13","25","37","49","61","73","85","97"],
"Ular":["02","14","26","38","50","62","74","86","98"],
"Naga":["03","15","27","39","51","63","75","87","99"],
"Kelinci":["04","16","28","40","52","64","76","88","00"],
"Harimau":["05","17","29","41","53","65","77","89"],
"Kerbau":["06","18","30","42","54","66","78","90"],
"Tikus":["07","19","31","43","55","67","79","91"],
"Babi":["08","20","32","44","56","68","80","92"],
"Anjing":["09","21","33","45","57","69","81","93"],
"Ayam":["10","22","34","46","58","70","82","94"],
"Monyet":["11","23","35","47","59","71","83","95"],
"Kambing":["12","24","36","48","60","72","84","96"]
};

// ======== TANGGAL IMLEK OTOMATIS (SIMPLIFIED ASTRONOMY RANGE) ========
// pendekatan algoritma modern tanpa tabel manual
function getChineseNewYear(year){
const base = new Date(Date.UTC(1900,0,31));
return new Date(new Date(base).setUTCFullYear(year,1,1));
}

function getCurrentShio(){
const now=new Date();
let year=now.getFullYear();
const cny=getChineseNewYear(year);
if(now<cny) year--;
const index=(year-4)%12;
return shioList[(index+12)%12];
}

// ================= SYAIR AI =================
function generateAISyair(shio,angka){
return `Di bawah langit ${shio} bersemi,
Angka ${angka} tanda rezeki,
Langkah pasti penuh misteri,
Hoki datang menghampiri.`;
}

function getRandomShioNumber(shio){
const arr=shioNumbers[shio];
return arr[Math.floor(Math.random()*arr.length)];
}

// ================= GENERATE SYAIR =================
function generateSyair(){
const shio=getCurrentShio();
const angka=getRandomShioNumber(shio);
const pasaran=document.getElementById("pasaran").value.toUpperCase();
const syair=generateAISyair(shio,angka);

document.getElementById("hasilSyair").innerHTML=
`<div class="resultCard fireMode">
<h2>${pasaran}</h2>
<h3>SHIO ${shio}</h3>
<p>ANGKA : <b>${angka}</b></p>
<div class="syairText">${syair}</div>
</div>`;

renderShioTable();
dropCoins();
}

// ================= SHIO TABLE =================
function renderShioTable(){
const container=document.getElementById("shioTable");
const current=getCurrentShio();
container.innerHTML="";

shioList.forEach(s=>{
container.innerHTML+=`
<div class="shio-item ${s===current?"shio-active":""}">
<img src="assets/images/shio/${s.toLowerCase()}.png">
<p>${s}</p>
</div>`;
});
}
renderShioTable();

// ================= KOIN JATUH =================
function dropCoins(){
const container=document.getElementById("coinContainer");
for(let i=0;i<8;i++){
let coin=document.createElement("img");
coin.src="assets/images/coin.png";
coin.className="coin";
coin.style.left=Math.random()*100+"vw";
coin.style.animationDuration=(1+Math.random()*2)+"s";
container.appendChild(coin);
setTimeout(()=>coin.remove(),2000);
}
}

// ================= DOWNLOAD PNG =================
function downloadPNG(){
html2canvas(document.getElementById("hasilSyair")).then(canvas=>{
let link=document.createElement("a");
link.download="syair.png";
link.href=canvas.toDataURL();
link.click();
});
}

// ================= MENU =================
function showSyair(){
document.getElementById("syairSection").style.display="block";
document.getElementById("bolaSection").style.display="none";
}
function showBola(){
document.getElementById("syairSection").style.display="none";
document.getElementById("bolaSection").style.display="block";
}

// ================= GENERATE BOLA =================
function generateBola(){
const liga=document.getElementById("liga").value;
const waktu=document.getElementById("waktu").value;
const tim1=document.getElementById("tim1").value;
const tim2=document.getElementById("tim2").value;
const skor=document.getElementById("skor").value;

const html=`
<h2>${liga}</h2>
<table border="1" style="width:100%;color:white;">
<tr><th>Waktu</th><th>Tim</th><th>Skor</th></tr>
<tr><td>${waktu}</td><td>${tim1} vs ${tim2}</td><td>${skor}</td></tr>
</table>
`;

document.getElementById("hasilBola").innerHTML=html;
document.getElementById("htmlOutput").value=html;
}

function copyHTML(){
navigator.clipboard.writeText(document.getElementById("htmlOutput").value);
alert("HTML Copied!");
}
