<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden text-center group">
    <img :src="product.image" :alt="product.name" class="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-300">
    <div class="p-4">
      <h3 class="font-semibold text-gray-800 truncate">{{ product.name }}</h3>
      <p class="text-floou-green font-bold my-2">Rp {{ product.price.toLocaleString('id-ID') }}</p>
      <button @click="addToCart" class="w-full bg-floou-green text-white py-2 rounded-lg hover:bg-floou-light-green transition-colors flex items-center justify-center gap-2">
        <PlusIcon class="h-5 w-5"/>
        Keranjang
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../../stores/cart';
import { PlusIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const cartStore = useCartStore();

function addToCart() {
  cartStore.addItem(props.product);
  // Tambahan: Beri notifikasi sederhana
  alert(`${props.product.name} telah ditambahkan ke keranjang!`);
}
</script>