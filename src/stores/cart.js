// src/stores/cart.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const items = ref([
    // PERBAIKAN: Mengganti ekstensi .jpg menjadi .png sesuai file yang ada
    { id: 1, name: 'Kaktus Bola Kecil', price: 30000, image: '/images/kaktus-set.png', quantity: 2 },
    { id: 2, name: 'Jade Plant Elegance', price: 89000, image: '/images/plant.png', quantity: 1 }, // Asumsi gambar jade plant adalah plant.png
    { id: 4, name: 'Bambu Air', price: 39000, image: '/images/bambu-air.png', quantity: 1 },
    { id: 5, name: 'Sirih Gading Golden', price: 58000, image: '/images/sirih-gading.png', quantity: 1 },
  ]);

  const couponCode = ref('');
  const discount = ref(0);

  const subtotal = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0);
  });

  const total = computed(() => {
    // Pastikan total tidak minus
    const finalTotal = subtotal.value - discount.value;
    return finalTotal < 0 ? 0 : finalTotal;
  });

  function getItemSubtotal(item) {
    return item.price * item.quantity;
  }

  function applyCoupon() {
    if (couponCode.value.toUpperCase() === 'KDASO9123') {
      discount.value = 15000;
      // Bisa ditambahkan notifikasi sukses
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

  // Tambahan: Fungsi untuk menambahkan item ke keranjang dari halaman produk
  function addItem(product) {
    const existingItem = items.value.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
  }
  
  // Tambahan: Fungsi untuk mengosongkan keranjang setelah checkout
  function clearCart() {
    items.value = [];
    discount.value = 0;
    couponCode.value = '';
  }

  return { items, couponCode, discount, subtotal, total, applyCoupon, removeItem, updateQuantity, getItemSubtotal, addItem, clearCart };
});