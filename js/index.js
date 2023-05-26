document.addEventListener('DOMContentLoaded', function() {
  fetch('templates/global/header.html')
    .then(response => response.text())
    .then(data => {
      const templateGlobalHeader = document.getElementById('template-global-header');
      templateGlobalHeader.innerHTML = data;
    });

    fetch('templates/index/hero.html')
    .then(response => response.text())
    .then(data => {
      const templateIndexHero = document.getElementById('template-index-hero');
      templateIndexHero.innerHTML = data;
    });

    fetch('templates/index/urunler.html')
    .then(response => response.text())
    .then(data => {
      const templateIndexUrunler = document.getElementById('template-index-urunler');
      templateIndexUrunler.innerHTML = data;
    });

    fetch('templates/index/iletisim.html')
    .then(response => response.text())
    .then(data => {
      const templateIndexİletisim = document.getElementById('template-index-iletisim');
      templateIndexİletisim.innerHTML = data;
    });

    fetch('templates/index/ceviri.html')
    .then(response => response.text())
    .then(data => {
      const templateIndexCeviri = document.getElementById('template-index-ceviri');
      templateIndexCeviri.innerHTML = data;
    });

    fetch('templates/global/footer.html')
    .then(response => response.text())
    .then(data => {
      const templateGlobalFooter = document.getElementById('template-global-footer');
      templateGlobalFooter.innerHTML = data;
    });

});


