// JAM WIB OTOMATIS
function updateTime() {
  const now = new Date();
  const options = {
    timeZone: "Asia/Jakarta",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };

  const waktu = new Intl.DateTimeFormat("id-ID", options).format(now) + " WIB";

  document.querySelectorAll("#datetime").forEach(el => {
    el.innerText = waktu;
  });
}

setInterval(updateTime, 1000);
updateTime();


// AI ANALISA SEDERHANA
function aiAnalisa(team1, team2) {
  const kuat = ["Manchester City", "Real Madrid", "Bayern", "Barcelona"];
  
  if (kuat.includes(team1)) return `${team1} unggul secara statistik dan performa.`;
  if (kuat.includes(team2)) return `${team2} memiliki peluang menang lebih besar.`;

  return "Pertandingan cukup seimbang, potensi seri cukup tinggi.";
}


// GENERATE TABEL PREDIKSI
function generatePrediksi() {
  const input = document.getElementById("matchInput").value.trim();
  if (!input) return;

  const matches = input.split("\n");

  let html = `
    <table>
      <tr>
        <th>Match</th>
        <th>Prediksi Skor</th>
        <th>AI Analisa</th>
      </tr>
  `;

  matches.forEach(match => {
    const teams = match.split("vs");
    if (teams.length === 2) {
      const t1 = teams[0].trim();
      const t2 = teams[1].trim();

      const skor1 = Math.floor(Math.random() * 4);
      const skor2 = Math.floor(Math.random() * 4);

      html += `
        <tr>
          <td>${t1} vs ${t2}</td>
          <td>${skor1} - ${skor2}</td>
          <td>${aiAnalisa(t1, t2)}</td>
        </tr>
      `;
    }
  });

  html += "</table>";

  document.getElementById("hasilPrediksi").innerHTML = html;
}


// COPY HTML
function copyHTML() {
  const content = document.getElementById("hasilPrediksi").innerHTML;
  navigator.clipboard.writeText(content);
  alert("HTML tabel berhasil dicopy!");
}
