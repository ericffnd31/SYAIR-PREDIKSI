function randomNumber(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
}

function generateSyair() {
  const pasaran = document.getElementById("pasaran").value;
  const angka = randomNumber(4);
  const shio = randomNumber(2);

  document.getElementById("syairResult").innerHTML = `
    <h3>${pasaran}</h3>
    <p>ANGKA MAIN: ${angka}</p>
    <p>ANGKA SHIO: ${shio}</p>
    <p>Semoga hoki selalu menyertai.</p>
  `;
}

function generatePrediksi() {
  const match = document.getElementById("matchInput").value;
  const skor1 = Math.floor(Math.random() * 5);
  const skor2 = Math.floor(Math.random() * 5);

  document.getElementById("bolaResult").innerHTML = `
    <h3>${match}</h3>
    <p>Prediksi Skor: ${skor1} - ${skor2}</p>
  `;
}
