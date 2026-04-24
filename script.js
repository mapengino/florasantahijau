  // ═══════ INIT ═══════
    AOS.init({ once: true, offset: 60 });

    // Navbar scroll
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));

    // Progress bar
    const bar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
      const total = document.body.scrollHeight - window.innerHeight;
      bar.style.width = (window.scrollY / total * 100) + '%';
    });

    // ═══════ MODAL ═══════
    function closeModal() {
      document.getElementById('modal-overlay').style.display = 'none';
      document.body.style.overflow = '';
    }
   document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {
    const name = card.querySelector('.card-name').textContent;
    const price = card.querySelector('.card-price').textContent;
    const img = card.querySelector('img').src;
    
    document.getElementById('modal-name').textContent = name;
    document.getElementById('modal-price').textContent = price;
    document.getElementById('modal-img').src = img;
    document.getElementById('modal-wa').href = card.dataset.wa;
    document.getElementById('modal-overlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});