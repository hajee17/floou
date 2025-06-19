<template>
    <div class="space-y-8">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <h1 class="text-3xl font-bold">Produk</h1>
            <div class="flex items-center gap-4">
                <div class="relative flex-1">
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" /></svg>
                    </span>
                    <input type="text" placeholder="Search" class="w-full md:w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                </div>
                <button class="bg-green-600 text-white font-semibold px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" /></svg>
                    <span>Buat Baru</span>
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div v-for="product in products" :key="product.id" class="bg-white rounded-xl shadow-sm overflow-hidden">
                <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover">
                <div class="p-4 space-y-2">
                    <h3 class="font-bold text-lg">{{ product.name }}</h3>
                    <p class="text-sm text-gray-600">{{ product.description }}</p>
                    <div class="flex justify-between items-center pt-2">
                        <div>
                            <p class="font-bold text-green-700">{{ product.price }}</p>
                            <p class="text-xs text-gray-500">Stok: {{ product.stock }}</p>
                        </div>
                        <div class="flex gap-2">
                           <button class="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-100 rounded-md">&lt;EditIcon/&gt;</button>
                           <button class="p-2 text-gray-500 hover:text-red-600 hover:bg-red-100 rounded-md">&lt;DeleteIcon/&gt;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Mock data
const products = Array(6).fill({
    id: 1,
    name: 'Kaktus Bola Kecil',
    description: 'Kaktus mini bulat, cocok untuk pot kecil atau set meja.',
    price: 'Rp 27.000',
    stock: 30,
    image: '/images/plant.jpg' // Assuming a default image
});
</script>