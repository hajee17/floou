// src/stores/cart.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const items = ref([
    // Isi dengan data dari halaman Keranjang sebagai contoh awal
    { id: 1, name: 'Kaktus Bola Kecil', price: 30000, image: '/images/kaktus-set.jpg', quantity: 2 },
    { id: 2, name: 'Jade Plant Elegance', price: 89000, image: '/images/jade-plant.jpg', quantity: 1 },
    { id: 4, name: 'Bambu Air', price: 39000, image: '/images/bambu-air.jpg', quantity: 1 },
    { id: 5, name: 'Sirih Gading Golden', price: 58000, image: '/images/sirih-gading.jpg', quantity: 1 },
  ]);

  const couponCode = ref('');
  const discount = ref(0);

  const subtotal = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0);
  });

  const total = computed(() => {
    return subtotal.value - discount.value;
  });

  function getItemSubtotal(item) {
    return item.price * item.quantity;
  }

  function applyCoupon() {
    if (couponCode.value.toUpperCase() === 'KDASO9123') {
      discount.value = 15000;
    } else {
      alert('Kode kupon tidak valid!');
      discount.value = 0;
    }
  }

  function removeItem(itemId) {
    items.value = items.value.filter(item => item.id !== itemId);
  }
  
  function updateQuantity(itemId, newQuantity) {
    const item = items.value.find(item => item.id === itemId);
    if (item && newQuantity > 0) {
      item.quantity = newQuantity;
    } else if (item && newQuantity <= 0) {
      removeItem(itemId);
    }
  }

  return { items, couponCode, discount, subtotal, total, applyCoupon, removeItem, updateQuantity, getItemSubtotal };
});