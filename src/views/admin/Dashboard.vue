<template>
  <div class="space-y-10">
    <h1 class="text-3xl font-bold">Dashboard</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="stat in stats" :key="stat.name" class="bg-green-600 rounded-xl p-6 text-white flex items-center gap-6">
            <div class="bg-white/30 p-3 rounded-lg">
                <component :is="stat.icon" class="h-8 w-8" />
            </div>
            <div>
                <p class="text-sm">{{ stat.name }}</p>
                <p class="text-2xl font-bold">{{ stat.value }}</p>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div class="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
            <div class="flex justify-between items-center mb-4">
                <h2 class="font-bold text-lg">Grafik Penjualan</h2>
                <div class="flex gap-1 bg-gray-100 p-1 rounded-lg text-sm">
                    <button class="px-3 py-1 rounded-md bg-white shadow">Minggu</button>
                    <button class="px-3 py-1 rounded-md text-gray-600">Bulan</button>
                    <button class="px-3 py-1 rounded-md text-gray-600">Tahun</button>
                </div>
            </div>
            <div class="h-64 flex items-end justify-between">
                <div v-for="day in salesData" :key="day.name" class="text-center w-1/7">
                    <div class="bg-gray-800 rounded-t-lg mx-auto" :style="{ height: day.value + '%' }"></div>
                    <p class="text-xs text-gray-500 mt-2">{{ day.name }}</p>
                </div>
            </div>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm">
            <h2 class="font-bold text-lg mb-4">Kategori Terlaris</h2>
            <div class="h-40 w-40 mx-auto mb-4 rounded-full bg-gray-200 relative">
                <div class="absolute inset-2 bg-white rounded-full"></div>
                 <div class="absolute inset-0 rounded-full" style="background: conic-gradient(orange 0% 45%, lightblue 45% 75%, #4D7C0F 75% 90%, #65A30D 90% 100%);"></div>
            </div>
            <ul class="space-y-2 text-sm">
                <li v-for="cat in categories" :key="cat.name" class="flex items-center gap-2">
                    <span class="h-3 w-3 rounded-sm" :style="{ backgroundColor: cat.color }"></span>
                    <span>{{ cat.name }}</span>
                </li>
            </ul>
        </div>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-sm">
      <h2 class="font-bold text-lg mb-4">Pesanan Terbaru</h2>
      <table class="w-full text-left text-sm">
        <thead class="bg-green-100 text-green-800 font-semibold">
          <tr>
            <th class="p-3">Order ID</th>
            <th class="p-3">Pesanan Produk</th>
            <th class="p-3">Alamat</th>
            <th class="p-3">Total Harga</th>
            <th class="p-3">Tanggal</th>
            <th class="p-3">Status</th>
            <th class="p-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in recentOrders" :key="order.id" class="border-b">
            <td class="p-3 font-medium text-gray-800">#{{ order.id }}</td>
            <td class="p-3 text-gray-600">{{ order.products }}</td>
            <td class="p-3 text-gray-600">{{ order.address }}</td>
            <td class="p-3 font-medium text-gray-800">{{ order.total }}</td>
            <td class="p-3 text-gray-600">{{ order.date }}</td>
            <td class="p-3"><span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">{{ order.status }}</span></td>
            <td class="p-3"><button class="text-gray-500 hover:text-gray-800">&lt;SearchIcon/&gt;</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
// Mock data - in a real app, this would come from an API
const stats = [
  { name: 'Total Pemasukan', value: 'Rp 99.999.999', icon: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', 'stroke-width': 2, viewBox: '0 0 24 24'}, [h('path', { 'stroke-linecap':'round', 'stroke-linejoin':'round', d:'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01' })]) },
  { name: 'Total Transaksi', value: '999.999.999', icon: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', 'stroke-width': 2, viewBox: '0 0 24 24'}, [h('path', { 'stroke-linecap':'round', 'stroke-linejoin':'round', d:'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4z' })]) },
  { name: 'Total Pelanggan', value: '999.999.999', icon: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', 'stroke-width': 2, viewBox: '0 0 24 24'}, [h('path', { 'stroke-linecap':'round', 'stroke-linejoin':'round', d:'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' })]) },
  { name: 'Stok Produk', value: '999.999.999', icon: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', 'stroke-width': 2, viewBox: '0 0 24 24'}, [h('path', { 'stroke-linecap':'round', 'stroke-linejoin':'round', d:'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 01-2.288 0 2 2 0 010-2.288 2 2 0 00.547-1.806l-.21-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86l.21-2.387a2 2 0 01.547-1.806 2 2 0 012.288 0 2 2 0 010 2.288 2 2 0 00-.547 1.806l.21 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 013.86.517l.318-.158a6 6 0 003.86-.517l2.387-.477a2 2 0 001.022-.547 2 2 0 012.288 0 2 2 0 010 2.288 2 2 0 00-.547 1.806l.21 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 013.86.517L17.95 8.79a2 2 0 011.806-.547 2 2 0 000-2.288 2 2 0 00-2.288 0z' })]) },
];
const salesData = [ { name: 'Senin', value: 20 }, { name: 'Selasa', value: 50 }, { name: 'Rabu', value: 85 }, { name: 'Kamis', value: 50 }, { name: 'Jumat', value: 40 }, { name: 'Sabtu', value: 50 }, { name: 'Minggu', value: 75 }];
const categories = [ { name: 'Floou Mini', color: 'orange' }, { name: 'Floou Gantung', color: 'lightblue' }, { name: 'Floou Air', color: '#4D7C0F' }, { name: 'Floou Kaktus', color: '#65A30D' }];
const recentOrders = [
  { id: '123124', products: 'Kaktus Bola Kecil, Jade Plant Elegance, Bambu Air, Sirih Gading Golden', address: 'Medokan Asri Barat No 19 RT 9 RW 1', total: 'Rp 231.000', date: '9 Apr 2025, 08:47', status: 'Diproses' },
  { id: '123124', products: 'Kaktus Bola Kecil', address: 'Medokan Asri Barat No 19 RT 9 RW 1', total: 'Rp 231.000', date: '9 Apr 2025, 08:47', status: 'Diproses' },
];
const h = (tag, attrs, children) => ({ functional: true, render: () => h(tag, attrs, children) }); // Helper
</script>