<template>
    <div class="space-y-6">
        <h1 class="text-3xl font-bold">Pesanan</h1>

        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left text-sm">
                    <thead class="bg-green-100 text-green-800 font-semibold">
                        <tr>
                            <th class="p-4">Order ID</th>
                            <th class="p-4">Pesanan Produk</th>
                            <th class="p-4">Alamat</th>
                            <th class="p-4">Total Harga</th>
                            <th class="p-4">Tanggal</th>
                            <th class="p-4">Status</th>
                            <th class="p-4">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="order in orders" :key="order.id" class="border-b">
                            <td class="p-4 font-medium text-gray-800">#{{ order.id }}</td>
                            <td class="p-4 text-gray-600">{{ order.products }}</td>
                            <td class="p-4 text-gray-600">{{ order.address }}</td>
                            <td class="p-4 font-medium text-gray-800">{{ order.total }}</td>
                            <td class="p-4 text-gray-600">{{ order.date }}</td>
                            <td class="p-4">
                                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">{{ order.status }}</span>
                            </td>
                            <td class="p-4">
                                <div class="flex gap-2">
                                    <button class="text-gray-500 hover:text-gray-800">&lt;SearchIcon/&gt;</button>
                                    <button class="text-gray-500 hover:text-blue-800">&lt;EditIcon/&gt;</button>
                                    <button class="text-gray-500 hover:text-red-800">&lt;DeleteIcon/&gt;</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="p-4 flex justify-between items-center text-sm text-gray-600">
                <p>Menampilkan 1-10 dari 1000 data</p>
                <div class="flex gap-2">
                    <button class="p-2 rounded-md hover:bg-gray-100">&lt;PrevIcon/&gt;</button>
                    <button class="p-2 rounded-md hover:bg-gray-100">&lt;NextIcon/&gt;</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Mock data
const orders = Array(10).fill({
    id: '123124', 
    products: 'Kaktus Bola Kecil, Jade Plant Elegance, Bambu Air, Sirih Gading Golden', 
    address: 'Medokan Asri Barat No 19 RT 9 RW 1', 
    total: 'Rp 231.000', 
    date: '9 Apr 2025, 08:47', 
    status: 'Diproses'
});
</script>