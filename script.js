// ================= JAM WIB =================
function updateJam(){
let now = new Date();
let wib = new Date(now.toLocaleString("en-US",{timeZone:"Asia/Jakarta"}));
document.getElementById("jamWIB").innerHTML =
wib.toLocaleDateString("id-ID") + " " +
wib.toLocaleTimeString("id-ID") + " WIB";
}
setInterval(updateJam,1000);
updateJam();

// ================= MENU =================
function showSyair(){
document.getElementById("syairSection").style.display="block";
document.getElementById("bolaSection").style.display="none";
}
function showBola(){
document.getElementById("syairSection").style.display="none";
document.getElementById("bolaSection").style.display="block";
}

// ================= DATA SHIO 2026 =================
const shioData = {
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

// ================= TABEL SHIO =================
function renderShioTable(active){
let html="";
for(let s in shioData){
html+=`<div class="shio-item ${s===active?"active-shio":""}">
<b>${s}</b><br>${shioData[s].join(", ")}
</div>`;
}
document.getElementById("shioTable").innerHTML=html;
}
renderShioTable("");

// ================= GENERATE SYAIR =================
function generateSyair(){

let pasaran = document.getElementById("pasaran").value.toUpperCase();
let keys = Object.keys(shioData);
let shio = keys[Math.floor(Math.random()*keys.length)];
let angkaList = shioData[shio];

let angkaMain = angkaList[Math.floor(Math.random()*angkaList.length)];
let bbfs = angkaMain.split("").join(" ");

let syair = `
Di langit malam ${shio} bersinar terang,<br>
Angka ${angkaMain} datang bagai pedang,<br>
Rahasia tersimpan dalam bayang,<br>
BBFS ${bbfs} menjadi petunjuk yang tenang.
`;

document.getElementById("hasilSyair").innerHTML = `
<h3>${pasaran}</h3>
<h2>${shio}</h2>
<div>${syair}</div>
<br>
<b>Angka Main:</b> ${angkaMain}<br>
<b>BBFS:</b> ${bbfs}
`;

renderShioTable(shio);
efekKoin();
}

// ================= EFEK KOIN =================
function efekKoin(){
let container=document.getElementById("coinContainer");
for(let i=0;i<5;i++){
let coin=document.createElement("div");
coin.innerHTML="🪙";
coin.style.position="fixed";
coin.style.left=Math.random()*100+"%";
coin.style.top="-50px";
coin.style.fontSize="30px";
coin.style.animation="fall 2s linear";
document.body.appendChild(coin);
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

// ================= PREDIKSI BOLA =================
let bolaData=[];

function generateBola(){
let liga=document.getElementById("liga").value;
let waktu=document.getElementById("waktu").value;
let tim1=document.getElementById("tim1").value;
let tim2=document.getElementById("tim2").value;
let skor=document.getElementById("skor").value;

bolaData.push({liga,waktu,tim:`${tim1} vs ${tim2}`,skor});
tampilkanPreview();
}

function tampilkanPreview(){
let html="";
bolaData.forEach(m=>{
html+=`<table>
<tr><th colspan="3">${m.liga}</th></tr>
<tr><td>${m.waktu}</td><td>${m.tim}</td><td>${m.skor}</td></tr>
</table>`;
});
document.getElementById("hasilBola").innerHTML=html;
}

function copyHTML(){
let template="";
bolaData.forEach(m=>{
template+=`
<div class="league">
<h2>${m.liga}</h2>
<table>
<tr><th>Waktu</th><th>Tim</th><th>Skor</th></tr>
<tr><td>${m.waktu}</td><td>${m.tim}</td><td>${m.skor}</td></tr>
</table>
</div>`;
});
document.getElementById("htmlOutput").value=template;
navigator.clipboard.writeText(template);
alert("HTML berhasil di-copy!");
}
