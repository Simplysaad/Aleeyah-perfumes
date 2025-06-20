const cartItemsContainer = document.querySelector('.cart-items');
const totalDisplay = document.querySelector('.cart-summary p');

function updateTotal() {
  let total = 0;
  document.querySelectorAll('.cart-item').forEach(item => {
    const priceText = item.querySelector('p:nth-child(3)').textContent;
    const price = parseFloat(priceText.replace('Price: $', ''));
    const qty = item.querySelector('.qty-input').value;
    total += price * qty;
  });
  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

// Remove item
cartItemsContainer.addEventListener('click', e => {
  if (e.target.classList.contains('remove-btn')) {
    e.target.closest('.cart-item').remove();
    updateTotal();
  }
});

// Update total on quantity change
cartItemsContainer.addEventListener('input', e => {
  if (e.target.classList.contains('qty-input')) {
    if (e.target.value < 1) e.target.value = 1;
    updateTotal();
  }
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
  alert('Thank you for your purchase! Checkout functionality coming soon.');
});

// Initialize total on page load
updateTotal();
