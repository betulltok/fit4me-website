function hesaplaBMI() {
  const kilo = parseFloat(document.getElementById("weight").value);
  const boy = parseFloat(document.getElementById("height").value);
  const result = document.getElementById("result");

  if (!kilo || !boy) {
    alert("Lütfen kilo ve boy giriniz.");
    return;
  }

  const boyMetre = boy / 100;
  const bmi = (kilo / (boyMetre * boyMetre)).toFixed(1);

  let durum = "";

  if (bmi < 18.5) {
    durum = "Zayıf";
  } else if (bmi < 25) {
    durum = "Normal";
  } else if (bmi < 30) {
    durum = "Fazla kilolu";
  } else {
    durum = "Obez";
  }

  result.innerHTML = `
    <h3>BMI Sonucunuz</h3>
    <p><strong>${bmi}</strong></p>
    <p>${durum}</p>
  `;

  result.classList.add("show");
}














