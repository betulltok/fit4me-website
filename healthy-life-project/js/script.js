// ============================
// SCROLL ANIMATIONS
// ============================
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 1s forwards';
      }
    });
  }, { threshold: 0.1 });

  // Tüm animasyonlu elementleri gözlemle
  document.querySelectorAll('.content-card, .feature-box').forEach(el => {
    observer.observe(el);
  });
});

// ============================
// SMOOTH SCROLL
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================
// PARALLAX EFFECT
// ============================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.hero');
  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ============================
// BMI CALCULATOR
// ============================
function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const resultDiv = document.getElementById('result');
  const recommendationsDiv = document.getElementById('recommendations');

  // Input kontrolü
  if (!weight || !height || weight <= 0 || height <= 0) {
    resultDiv.innerHTML = `
      <p style="color: #ff6b6b; font-size: 1.2rem;">
        Lütfen geçerli kilo ve boy değerleri girin!
      </p>
    `;
    resultDiv.style.display = 'block';
    return;
  }

  // BMI hesaplama
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  // Kategori belirleme
  let category = '';
  let categoryColor = '';
  let advice = '';
  let exerciseRecommendation = '';
  let nutritionRecommendation = '';
  let tipRecommendation = '';
  let exerciseLink = '';

  if (bmi < 18.5) {
    category = 'Zayıf';
    categoryColor = '#ffd93d';
    advice = 'Kilo almanız önerilir. Sağlıklı beslenme ve güç antrenmanlarına odaklanın.';
    exerciseRecommendation = 'Güç antrenmanları ve hafif kardiyo egzersizleri. Haftada 3-4 gün düzenli çalışın.';
    nutritionRecommendation = 'Kalori açığını kapatmak için protein ve sağlıklı karbonhidrat alımını artırın.';
    tipRecommendation = 'Günde 5-6 öğün küçük porsiyonlar halinde beslenin.';
    exerciseLink = 'exercises.html#strength';
  } else if (bmi >= 18.5 && bmi < 25) {
    category = 'Normal';
    categoryColor = '#6bcf7f';
    advice = 'Harika! İdeal kilonuzdasınız. Bu durumu korumaya devam edin.';
    exerciseRecommendation = 'Dengeli bir program: kardiyo, güç ve esneklik egzersizleri. Haftada 4-5 gün.';
    nutritionRecommendation = 'Dengeli beslenmeye devam edin. Protein, karbonhidrat ve yağ dengesine dikkat edin.';
    tipRecommendation = 'Düzenli egzersiz rutininizi koruyun ve çeşitli aktiviteler deneyin.';
    exerciseLink = 'exercises.html#flexibility';
  } else if (bmi >= 25 && bmi < 30) {
    category = 'Fazla Kilolu';
    categoryColor = '#ff9f43';
    advice = 'Kilo vermeniz önerilir. Dengeli beslenme ve düzenli egzersiz yapın.';
    exerciseRecommendation = 'Kardiyo egzersizlere odaklanın: yürüyüş, koşu, yüzme. Haftada 5 gün, 45 dakika.';
    nutritionRecommendation = 'Kalori açığı oluşturun. Porsiyon kontrolü yapın ve işlenmiş gıdalardan kaçının.';
    tipRecommendation = 'Günlük 10.000 adım hedefi koyun ve merdivenleri tercih edin.';
    exerciseLink = 'exercises.html#cardio';
  } else {
    category = 'Obez';
    categoryColor = '#ff6b6b';
    advice = 'Sağlığınız için kilo vermeniz gerekiyor. Bir diyetisyen ve doktora danışmanızı öneririz.';
    exerciseRecommendation = 'Hafif kardiyo ile başlayın: yürüyüş, su egzersizleri. Haftada 5 gün, 30 dakikadan başlayın.';
    nutritionRecommendation = 'Profesyonel destek alın. Düşük kalorili, yüksek proteinli beslenme planı uygulayın.';
    tipRecommendation = 'Hedeflerinizi küçük adımlara bölün. Her hafta küçük başarıları kutlayın.';
    exerciseLink = 'exercises.html#cardio';
  }

  // Sonuçları göster
  resultDiv.innerHTML = `
    <h3>BMI Sonucunuz</h3>
    <div class="bmi-value" style="color: ${categoryColor};">${bmi}</div>
    <p style="font-size: 1.5rem; color: ${categoryColor}; font-weight: bold; margin-bottom: 1rem;">
      ${category}
    </p>
    <p style="color: #cbd5e1; font-size: 1.1rem;">
      ${advice}
    </p>
  `;
  resultDiv.style.display = 'block';

  // Önerileri göster
  if (recommendationsDiv) {
    // Egzersiz önerisini link olarak göster
    const exerciseBox = document.querySelector('#recommendations .feature-box:first-child p');
    if (exerciseBox) {
      exerciseBox.innerHTML = `${exerciseRecommendation} <br><br><a href="${exerciseLink}" class="exercise-link" style="color: #00f2fe; text-decoration: underline; font-weight: bold;">Detaylı Egzersiz Programını Gör</a>`;
    }
    
    document.getElementById('nutrition-recommendation').textContent = nutritionRecommendation;
    document.getElementById('tip-recommendation').textContent = tipRecommendation;
    recommendationsDiv.style.display = 'grid';
  }

  // BMI sonucuna yumuşak kaydırma
  setTimeout(() => {
    resultDiv.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
  }, 100);
}

// Enter tuşu ile hesaplama ve input geçişi
document.addEventListener('DOMContentLoaded', function() {
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');

  if (weightInput && heightInput) {
    // Kilo inputunda Enter'a basınca boy inputuna geç
    weightInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        heightInput.focus();
      }
    });

    // Boy inputunda Enter'a basınca hesapla
    heightInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        calculateBMI();
      }
    });
  }
});

// ============================
// ACTIVE LINK HIGHLIGHTER
// ============================
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});

// ============================
// LOADING ANIMATION
// ============================
window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s';
    document.body.style.opacity = '1';
  }, 100);

  // URL'de hash varsa o bölüme scroll yap
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
        // Vurgulama efekti
        target.style.transform = 'scale(1.02)';
        target.style.boxShadow = '0 25px 60px rgba(79, 172, 254, 0.6)';
        setTimeout(() => {
          target.style.transform = '';
          target.style.boxShadow = '';
        }, 2000);
      }
    }, 500);
  }
});

// ============================
// FORM VALIDATION (Opsiyonel)
// ============================
function validateInput(input) {
  const value = parseFloat(input.value);
  if (isNaN(value) || value <= 0) {
    input.style.borderColor = '#ff6b6b';
    return false;
  } else {
    input.style.borderColor = 'rgba(79, 172, 254, 0.3)';
    return true;
  }
}

// Input validation ekle
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.input-group input');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateInput(this);
    });
  });
});



