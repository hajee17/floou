<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden text-center">
    <img :src="product.image" :alt="product.name" class="w-full h-40 object-cover">
    <div class="p-4">
      <h3 class="font-semibold text-gray-800">{{ product.name }}</h3>
      <p class="text-floou-green font-bold my-2">Rp {{ product.price.toLocaleString('id-ID') }}</p>
      <button class="w-full bg-floou-green text-white py-2 rounded-lg hover:bg-floou-light-green transition-colors">
        + Keranjang
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});


</script>