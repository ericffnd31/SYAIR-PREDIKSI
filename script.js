// ================= JAM WIB =================
setInterval(()=>{
let now = new Date();
let wib = new Date(now.toLocaleString("en-US",{timeZone:"Asia/Jakarta"}));
document.getElementById("jamWIB").innerHTML =
wib.toLocaleDateString("id-ID") + " | " +
wib.toLocaleTimeString("id-ID");
},1000);

// ================= MENU =================
function showSyair(){
document.getElementById("syairSection").style.display="block";
document.getElementById("bolaSection").style.display="none";
}

function showBola(){
document.getElementById("syairSection").style.display="none";
document.getElementById("bolaSection").style.display="block";
}

// ================= SHIO DATA =================
const shioData = [
{name:"Tikus",img:"assets/shio/tikus.png"},
{name:"Kerbau",img:"assets/shio/kerbau.png"},
{name:"Macan",img:"assets/shio/macan.png"},
{name:"Kelinci",img:"assets/shio/kelinci.png"},
{name:"Naga",img:"assets/shio/naga.png"},
{name:"Ular",img:"assets/shio/ular.png"},
{name:"Kuda",img:"assets/shio/kuda.png"},
{name:"Kambing",img:"assets/shio/kambing.png"},
{name:"Monyet",img:"assets/shio/monyet.png"},
{name:"Ayam",img:"assets/shio/ayam.png"},
{name:"Anjing",img:"assets/shio/anjing.png"},
{name:"Babi",img:"assets/shio/babi.png"}
];

// tampilkan shio
let table="";
shioData.forEach(s=>{
table+=`
<div class="shio-card">
<img src="${s.img}">
<h3>${s.name}</h3>
</div>
`;
});
document.getElementById("shioTable").innerHTML=table;


// ================= GENERATE SYAIR =================
function generateSyair(){

let pasaran=document.getElementById("pasaran").value;

let angka=[];
while(angka.length<6){
let n=Math.floor(Math.random()*10);
if(!angka.includes(n)) angka.push(n);
}

let syair=`
<h3>PASARAN ${pasaran.toUpperCase()}</h3>
<p>BBFS : ${angka.join("")}</p>
<p>Angka Main : ${angka[0]} ${angka[1]} ${angka[2]}</p>
<p>
Bayu malam berbisik pelan,<br>
Angka turun membawa harapan,<br>
Jejak shio memberi petunjuk jalan,<br>
${angka[0]} dan ${angka[1]} jadi pegangan.
</p>
`;

document.getElementById("hasilSyair").innerHTML=syair;
}


// ================= BULK BOLA =================
function generateBulk(){

let text=document.getElementById("bulkInput").value;
let lines=text.split("\n");

let html="";
let currentLeague="";

lines.forEach(line=>{
line=line.trim();
if(line==="") return;

if(!line.match(/^\d/)){
if(currentLeague!==""){
html+="</table></div>";
}
currentLeague=line;
html+=`
<div class="league-block">
<h2>${currentLeague}</h2>
<table>
<tr><th>Waktu</th><th>Pertandingan</th><th>Prediksi</th></tr>
`;
}
else{
let match=line.match(/(.*WIB)\s+(.*)\s+(\d+\s*:\s*\d+)/);
if(match){
html+=`
<tr>
<td>${match[1]}</td>
<td>${match[2]}</td>
<td>${match[3]}</td>
</tr>
`;
}
}
});

if(currentLeague!==""){
html+="</table></div>";
}

document.getElementById("hasilBola").innerHTML=html;
document.getElementById("htmlOutput").value=html;
}

function copyBulkHTML(){
let html=document.getElementById("htmlOutput").value;
navigator.clipboard.writeText(html);
alert("HTML berhasil di-copy!");
}
