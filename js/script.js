function hesaplaBMI() {
  let kilo = parseFloat(document.getElementById("weight").value);
  let boy = parseFloat(document.getElementById("height").value) / 100;
  let result = document.getElementById("result");

  if (!kilo || !boy) {
    alert("Lütfen kilo ve boy giriniz.");
    return;
  }

  let bmi = (kilo / (boy * boy)).toFixed(1);

  result.className = "bmi-result show";

  let durum = "";

  if (bmi < 18.5) {
    durum = "Zayıf";
    result.classList.add("bmi-blue");
  } 
  else if (bmi >= 18.5 && bmi < 25) {
    durum = "Normal Kilolu";
    result.classList.add("bmi-green");
  } 
  else if (bmi >= 25 && bmi < 30) {
    durum = "Fazla Kilolu";
    result.classList.add("bmi-red");
  }
  else {
    durum = "Obez";
    result.classList.add("bmi-red");
  }

  result.innerHTML = `
    <h3>BMI Sonucunuz</h3>
    <p><strong>${bmi}</strong></p>
    <p>${durum}</p>
  `;
}



