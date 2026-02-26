// ===== JAM WIB =====
function updateWIB(){
const now = new Date();
const options = { 
timeZone: 'Asia/Jakarta',
weekday: 'long',
year: 'numeric',
month: 'long',
day: 'numeric',
hour: '2-digit',
minute: '2-digit',
second: '2-digit'
};
document.getElementById("jamWIB").innerHTML =
new Intl.DateTimeFormat('id-ID', options).format(now) + " WIB";
}
setInterval(updateWIB,1000);
updateWIB();

// ===== MENU SWITCH =====
function showSyair(){
document.getElementById("syairSection").style.display="block";
document.getElementById("bolaSection").style.display="none";
}
function showBola(){
document.getElementById("syairSection").style.display="none";
document.getElementById("bolaSection").style.display="block";
}

// ===== SHIO =====
function getShio(year){
const shioList=[
"monyet","ayam","anjing","babi",
"tikus","kerbau","macan","kelinci",
"naga","ular","kuda","kambing"
];
return shioList[year % 12];
}

function randomNumbers(total){
let arr=[];
for(let i=0;i<total;i++){
arr.push(Math.floor(Math.random()*10));
}
return arr.join("-");
}

const quotes=[
"Kerja keras membuka pintu rezeki",
"Sabar adalah kunci keberhasilan",
"Fokus hari ini hasil esok hari",
"Keberuntungan milik yang berusaha",
"Jangan ragu melangkah maju"
];

function randomQuote(){
return quotes[Math.floor(Math.random()*quotes.length)];
}

// ===== GENERATE SYAIR =====
function generateSyair(){

const pasaran=document.getElementById("pasaran").value;
const year=new Date().getFullYear();
const shio=getShio(year);

const bbfs=randomNumbers(7);
const angkaMain=randomNumbers(5);
const angkaShio=Math.floor(Math.random()*99);
const quote=randomQuote();

const shioImg=`assets/images/shio/${shio}.png`;
const pasaranImg=`assets/images/pasaran/${pasaran}.png`;

document.getElementById("hasilSyair").innerHTML=`
<div class="card" id="capture">
<h2>${pasaran.toUpperCase()}</h2>
<img src="${pasaranImg}" width="120">
<h3>SHIO ${shio.toUpperCase()}</h3>
<img src="${shioImg}" width="120">
<p>ANGKA SHIO : ${angkaShio}</p>
<p>BBFS : ${bbfs}</p>
<p>ANGKA MAIN : ${angkaMain}</p>
<p>"${quote}"</p>
</div>
`;
}

function downloadPNG(){
const capture=document.getElementById("capture");
if(!capture){ alert("Generate dulu!"); return; }
html2canvas(capture).then(canvas=>{
const link=document.createElement("a");
link.download="hasil-syair.png";
link.href=canvas.toDataURL();
link.click();
});
}

// ===== GENERATE BOLA =====
function generateBola(){

const liga=document.getElementById("liga").value;
const waktu=document.getElementById("waktu").value;
const tim1=document.getElementById("tim1").value;
const tim2=document.getElementById("tim2").value;
const skor=document.getElementById("skor").value;

const html=`
<div class="card">
<h2>${liga}</h2>
<table>
<tr><th>Waktu</th><th>Tim</th><th>Skor</th></tr>
<tr>
<td>${waktu}</td>
<td>${tim1} vs ${tim2}</td>
<td>${skor}</td>
</tr>
</table>
</div>
`;

document.getElementById("hasilBola").innerHTML=html;
document.getElementById("htmlOutput").value=html;
}

function copyHTML(){
const textarea=document.getElementById("htmlOutput");
textarea.select();
document.execCommand("copy");
alert("HTML berhasil di copy!");
}
