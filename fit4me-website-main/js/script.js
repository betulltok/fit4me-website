function hesaplaBMI() {
  const kilo = parseFloat(document.getElementById('weight').value);
  const boy = parseFloat(document.getElementById('height').value);
  const result = document.getElementById('result');

  if (!kilo || !boy || kilo <= 0 || boy <= 0) {
    alert('Lütfen geçerli kilo ve boy değerleri girin!');
    return;
  }

  const boyMetre = boy / 100;
  const bmi = (kilo / (boyMetre * boyMetre)).toFixed(1);

  let durum = '';
  let mesaj = '';
  let renk = '';

  if (bmi < 18.5) {
    durum = 'Zayıf';
    renk = '#f39c12';
    mesaj = 'Kilo almanız önerilir. Sağlıklı beslenme ve güç antrenmanlarına odaklanın.';
  } else if (bmi < 25) {
    durum = 'Normal';
    renk = '#27ae60';
    mesaj = 'Harika! İdeal kilonuzdasınız. Bu durumu korumaya devam edin.';
  } else if (bmi < 30) {
    durum = 'Fazla Kilolu';
    renk = '#e67e22';
    mesaj = 'Kilo vermeniz önerilir. Dengeli beslenme ve düzenli egzersiz yapın.';
  } else {
    durum = 'Obez';
    renk = '#e74c3c';
    mesaj = 'Sağlığınız için kilo vermeniz gerekiyor. Bir diyetisyen ve doktora danışmanızı öneririz.';
  }

  result.innerHTML = `
    <h3>BMI Sonucunuz</h3>
    <div class="bmi-value" style="color: ${renk};">${bmi}</div>
    <p style="font-size: 1.3rem; color: ${renk}; font-weight: bold;">
      ${durum}
    </p>
    <p>${mesaj}</p>
  `;

  result.className = 'bmi-result show';
}








