<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="orderStore.isLoading" class="text-center">Memuat detail pesanan...</div>
    <div v-else-if="orderStore.error" class="text-center text-red-500">{{ orderStore.error }}</div>
    <div v-else-if="order" class="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div class="flex justify-between items-start">
        <div>
          <h1 class="text-2xl font-bold">Detail Pesanan #{{ order.id }}</h1>
          <p class="text-gray-500">Tanggal Pesan: {{ new Date(order.created_at).toLocaleString('id-ID') }}</p>
        </div>
        <span class="px-3 py-1 text-sm font-semibold rounded-full" :class="statusClass(order.status)">
          {{ order.status }}
        </span>
      </div>
      <hr class="my-6">
      <div>
        <h2 class="text-lg font-semibold mb-2">Alamat Pengiriman</h2>
        <p class="text-gray-700">{{ order.shipping_address }}</p>
        <p v-if="order.notes" class="text-sm text-gray-500 mt-1">Catatan: {{ order.notes }}</p>
      </div>
      <hr class="my-6">
      <div>
        <h2 class="text-lg font-semibold mb-4">Item Pesanan</h2>
        <div v-for="item in order.order_details" :key="item.id" class="flex justify-between items-center mb-4">
          <div>
            <p class="font-medium">{{ item.plant.name }}</p>
            <p class="text-sm text-gray-600">{{ item.quantity }} x Rp {{ parseFloat(item.price).toLocaleString('id-ID') }}</p>
          </div>
          <p class="font-semibold">Rp {{ (item.quantity * item.price).toLocaleString('id-ID') }}</p>
        </div>
      </div>
      <hr class="my-6 border-dashed">
      <div class="flex justify-end">
        <div class="w-full max-w-xs">
          <div class="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>Rp {{ parseFloat(order.total_price).toLocaleString('id-ID') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useOrderStore } from '@/stores/order';

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  }
});

const orderStore = useOrderStore();
const order = computed(() => orderStore.order);

onMounted(() => {
  orderStore.fetchOrder(props.id);
});

const statusClass = (status) => {
    switch (status) {
    case 'pending': return 'bg-yellow-100 text-yellow-800';
    case 'confirmed': return 'bg-blue-100 text-blue-800';
    case 'completed': return 'bg-green-100 text-green-800';
    case 'canceled': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};
</script>