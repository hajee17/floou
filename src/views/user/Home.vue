<template>
  <div>
    <section class="bg-floou-brown text-white rounded-lg p-12 flex items-center mb-10">
      <div class="w-1/2">
        <h1 class="text-4xl font-bold mb-4">Natural Plants, <br/> Happier Places</h1>
        <p class="mb-6">Hiasi ruanganmu dengan tanaman agar lebih segar, tenang, dan dekat dengan alam.</p>
        <button class="bg-white text-floou-brown font-bold py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors">Beli Sekarang</button>
      </div>
      <div class="w-1/2 flex justify-center">
         <img src="/images/plant.png" alt="Hero Plants" class="max-h-64">
      </div>
    </section>

    <section class="mb-10">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Tanaman Favorit Pilihan</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white p-4 rounded-lg shadow flex items-center">
                <img src="/images/english-ivy.png" alt="English Ivy" class="w-24 h-24 object-cover rounded-md mr-4">
                <div>
                    <h3 class="font-bold">English Ivy Cascade</h3>
                    <p class="text-floou-green font-semibold">Rp 65.000</p>
                </div>
            </div>
            <div class="bg-white p-4 rounded-lg shadow flex items-center">
                <img src="/images/sirih-gading.png" alt="Sirih Gading" class="w-24 h-24 object-cover rounded-md mr-4">
                <div>
                    <h3 class="font-bold">Sirih Gading Golden</h3>
                    <p class="text-floou-green font-semibold">Rp 58.000</p>
                </div>
            </div>
        </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Teman Hijau untuk Hari-Harimu</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <ProductCart v-for="product in productList" :key="product.id" :product="product" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// PERBAIKAN: Path dan nama komponen yang benar
import ProductCart from '../components/ProductCart.vue'; 
// PERBAIKAN: Path store yang benar
import { products } from '../../stores/dummyData.js'; 

// Perbaiki path gambar produk
const productList = ref(products.map(p => ({
    ...p,
    image: p.image.replace('.jpg', '.png')
})));
</script>