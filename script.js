function getShio(year){
  const shioList = [
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
"Fokus hari ini hasil esok hari",
"Sabar adalah kunci keberhasilan",
"Keberuntungan milik yang berusaha",
"Jangan ragu melangkah maju"
];

function randomQuote(){
  return quotes[Math.floor(Math.random()*quotes.length)];
}

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

  document.getElementById("hasil").innerHTML=`
  <div class="card" id="capture">
      <h2>${pasaran.toUpperCase()}</h2>
      <img src="${pasaranImg}" onerror="this.src='assets/images/pasaran/default.png'">
      <h3>SHIO ${shio.toUpperCase()}</h3>
      <img src="${shioImg}">
      <p>ANGKA SHIO : ${angkaShio}</p>
      <p>BBFS : ${bbfs}</p>
      <p>ANGKA MAIN : ${angkaMain}</p>
      <p>"${quote}"</p>
  </div>
  `;
}

function downloadPNG(){
  const capture=document.getElementById("capture");
  html2canvas(capture).then(canvas=>{
    const link=document.createElement("a");
    link.download="hasil-syair.png";
    link.href=canvas.toDataURL();
    link.click();
  });
}
