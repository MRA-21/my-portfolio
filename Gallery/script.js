const images = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.remove('hidden');
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.add('hidden');
  }
});