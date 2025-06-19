<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Keranjang Saya</h1>
    <div class="grid grid-cols-3 gap-8">
      <div class="col-span-2 bg-white p-6 rounded-lg shadow">
        <div class="flex border-b pb-2 font-bold text-gray-600">
          <div class="w-2/5">Produk</div>
          <div class="w-1/5 text-center">Harga</div>
          <div class="w-1/5 text-center">Jumlah</div>
          <div class="w-1/5 text-center">Subtotal</div>
        </div>
        <div v-for="item in cart.items" :key="item.id" class="flex items-center border-b py-4">
          <div class="w-2/5 flex items-center">
            <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-md mr-4">
            <div>
              <p class="font-bold">{{ item.name }}</p>
            </div>
          </div>
          <div class="w-1/5 text-center">Rp {{ item.price.toLocaleString('id-ID') }}</div>
          <div class="w-1/5 flex justify-center items-center">
            <button @click="cart.updateQuantity(item.id, item.quantity - 1)" class="px-2 border rounded">-</button>
            <span class="px-4">{{ item.quantity }}</span>
            <button @click="cart.updateQuantity(item.id, item.quantity + 1)" class="px-2 border rounded">+</button>
          </div>
          <div class="w-1/5 text-center font-semibold">Rp {{ cart.getItemSubtotal(item).toLocaleString('id-ID') }}</div>
          <button @click="cart.removeItem(item.id)" class="text-red-500 ml-4">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          </button>
        </div>
      </div>

      <div class="col-span-1">
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-bold border-b pb-2 mb-4">Ringkasan Pesanan</h2>
          <div class="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rp {{ cart.subtotal.toLocaleString('id-ID') }}</span>
          </div>
          <div v-if="cart.discount > 0" class="flex justify-between mb-2 text-green-600">
            <span>Diskon</span>
            <span>-Rp {{ cart.discount.toLocaleString('id-ID') }}</span>
          </div>
          <div class="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total Harga</span>
            <span>Rp {{ cart.total.toLocaleString('id-ID') }}</span>
          </div>
          
          <div class="mt-6">
            <label class="font-semibold">Masukkan Kode Promo</label>
            <div class="flex mt-1">
              <input v-model="cart.couponCode" type="text" class="w-full border rounded-l-md px-2 py-1" placeholder="KDASO9123">
              <button @click="cart.applyCoupon" class="bg-floou-green text-white px-4 rounded-r-md">Gunakan</button>
            </div>
          </div>

          <div class="mt-6">
            <div class="font-bold">Pilih cara pembayaran</div>
            <div class="flex justify-around mt-2">
              <button class="p-2 border rounded-md w-1/3 text-center" :class="{ 'bg-floou-green text-white': paymentMethod === 'qris' }" @click="paymentMethod = 'qris'">
                Qris
              </button>
              </div>
          </div>
          
          <button @click="checkout" class="w-full bg-floou-green text-white font-bold py-3 rounded-lg mt-6 hover:bg-floou-light-green">Buat Pesanan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '../stores/cart';

const cart = useCartStore();
const router = useRouter();
const paymentMethod = ref('qris');

function checkout() {
  // Simpan data cart ke local storage atau kirim ke Pinia store lain
  // sebelum pindah halaman agar bisa diakses di halaman QRIS
  router.push('/selesaikan-pesanan');
}
</script>