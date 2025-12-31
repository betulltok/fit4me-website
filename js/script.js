function hesaplaBMI() {

  var kilo = Number(document.getElementById("weight").value);
  var boy = Number(document.getElementById("height").value);
  var sonuc = document.getElementById("result");

  if (kilo <= 0 || boy <= 0 || isNaN(kilo) || isNaN(boy)) {
    alert("Lütfen geçerli değerler giriniz.");
    return;
  }

  var boyMetre = boy / 100;
  var bmi = kilo / (boyMetre * boyMetre);
  bmi = bmi.toFixed(1);

  var durum;
  var renk;
  var mesaj;

  if (bmi < 18.5) {
    durum = "Zayıf";
    renk = "orange";
    mesaj = "Biraz kilo alman iyi olabilir.";
  } 
  else if (bmi < 25) {
    durum = "Normal";
    renk = "green";
    mesaj = "Kilon ideal, böyle devam et.";
  } 
  else if (bmi < 30) {
    durum = "Fazla kilolu";
    renk = "darkorange";
    mesaj = "Biraz dikkat edersen iyi olur.";
  } 
  else {
    durum = "Obez";
    renk = "red";
    mesaj = "Sağlığın için bir uzmana görünmelisin.";
  }

  sonuc.innerHTML =
    "<h3>BMI Sonucun</h3>" +
    "<p style='color:" + renk + "; font-weight:bold'>" + durum + "</p>" +
    "<p>" + mesaj + "</p>" +
    "<p><b>" + bmi + "</b></p>";

  sonuc.className = "bmi-result";
}










