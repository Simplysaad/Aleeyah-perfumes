// Change main image on thumbnail click
const mainImage = document.querySelector('.product-gallery > img');
document.querySelectorAll('.thumbnail-row img').forEach(thumb => {
  thumb.addEventListener('click', () => {
    mainImage.src = thumb.src;
    mainImage.alt = thumb.alt;
  });
});

// Add to cart simulation
document.getElementById('addToCartBtn').addEventListener('click', () => {
  alert('Floral Essence added to your cart!');
  // Here you could add real cart logic (localStorage/sessionStorage)
});
