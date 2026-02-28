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
function generateBulk() {

let text = document.getElementById("bulkInput").value.trim();
let lines = text.split("\n");

let templateStart = `
<p></p>
<style>
/* CSS TETAP PERSIS - TIDAK DIUBAH */
body {
    font-family: 'Arial', sans-serif;
    background-color: #000;
    color: #fff;
    margin: 0;
    padding: 0;
}
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    max-width: 100%;
}
h2 {
    text-align: center;
    color: #ffffff;
    margin-top: 15px;
    text-transform: uppercase;
}
table {
    width: 100%;
    max-width: 800px;
    margin: 20px auto;
    border-collapse: collapse;
    box-shadow: 0 0 20px rgba(255,140,66,0.5);
    background-color: #1a1a1a;
    border-radius: 12px;
    overflow: hidden;
}
th, td {
    padding: 10px;
    border: 1px solid #333;
    text-align: center;
}
th {
    background-color: #b00909;
    color: #000;
    font-weight: bold;
}
tr:nth-child(even) {
    background-color: #262626;
}
.marquee {
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    color: #ffffff;
    padding: 15px 0;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 2px solid #b00909;
    width: 100%;
    text-align: center;
}
.marquee p {
    display: inline-block;
    animation: marquee 10s linear infinite;
    margin: 0;
}
@keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}
@media (max-width: 600px) {
    table { font-size: 9px; }
    th, td { padding: 8px; }
    .marquee { font-size: 14px; padding: 10px 0; }
}
</style>

<div class="wrapper">
<div class="marquee">
<p>SELAMAT DATANG DI PREDIKSI BOLA RUANGWD! | PREDIKSI PERTANDINGAN BOLA JITU DAN AKURAT!</p>
</div>
<div class="marquee">
<p>Jadwal Pertandingan</p>
</div>
`;

let html = templateStart;
let currentLeague = "";

lines.forEach(line => {

line = line.trim();
if(line === "") return;

// Jika bukan diawali angka → dianggap nama liga
if(!line.match(/^\d/)) {

if(currentLeague !== "") {
html += `</tbody></table></div>`;
}

currentLeague = line;

html += `
<div class="league">
<h2>${currentLeague}</h2>
<table>
<tbody>
<tr>
<th>Waktu</th>
<th>Tim</th>
<th>Skor</th>
</tr>
`;

} else {

// Format: 28/02 19:30 WIB Team A vs Team B 2 - 1
let match = line.match(/(.*WIB)\s+(.*)\s+(\d+\s*-\s*\d+)/);

if(match){
html += `
<tr>
<td>${match[1]}</td>
<td>${match[2]}</td>
<td>${match[3]}</td>
</tr>
`;
}

}

});

if(currentLeague !== ""){
html += `</tbody></table></div>`;
}

html += `</div>`;

document.getElementById("hasilBola").innerHTML = html;
document.getElementById("htmlOutput").value = html;

}
