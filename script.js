function generateHTML() {
    const input = document.getElementById("inputData").value;
    const lines = input.split("\n");

    let outputHTML = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Prediksi Bola</title>
<style>
body{background:#000;color:#fff;font-family:Courier New;padding:20px;}
table{width:100%;border-collapse:collapse;}
th,td{border:1px solid #444;padding:8px;text-align:center;}
</style>
</head>
<body>
<h2>Prediksi Bola Hari Ini (WIB)</h2>
`;

    let currentLeague = "";

    lines.forEach(line => {
        if(line.trim() === "") return;

        if(!line.includes("|")){
            currentLeague = line.trim();
            outputHTML += `<h3>${currentLeague}</h3>`;
            outputHTML += `<table>
<tr>
<th>Waktu (WIB)</th>
<th>Pertandingan</th>
<th>Prediksi Skor</th>
</tr>`;
        } else {
            const parts = line.split("|");
            const waktu = parts[0].trim() + " WIB";
            const match = parts[1].trim();

            const skor1 = Math.floor(Math.random()*4);
            const skor2 = Math.floor(Math.random()*4);

            outputHTML += `
<tr>
<td>${waktu}</td>
<td>${match}</td>
<td>${skor1} - ${skor2}</td>
</tr>`;
        }
    });

    outputHTML += `
</table>
</body>
</html>`;

    document.getElementById("preview").innerHTML = outputHTML;
    document.getElementById("htmlOutput").value = outputHTML;
}

function copyHTML() {
    const textarea = document.getElementById("htmlOutput");
    textarea.select();
    document.execCommand("copy");
    alert("HTML berhasil dicopy!");
}
