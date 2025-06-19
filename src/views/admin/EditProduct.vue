<template>
    <div class="max-w-2xl mx-auto">
        <div class="flex items-center gap-4 mb-8">
            <button class="p-2 rounded-full hover:bg-gray-200" @click="$router.back()">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <h1 class="text-3xl font-bold">Edit Produk</h1>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-sm space-y-6">
            <div>
                <label class="font-semibold text-sm text-gray-700 block mb-1">Nama Produk</label>
                <input type="text" value="Kaktus Bola Kecil" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            </div>
            <div>
                <label class="font-semibold text-sm text-gray-700 block mb-1">Deskripsi Produk</label>
                <textarea rows="4" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">Kaktus mini bulat, cocok untuk pot kecil atau set meja.</textarea>
            </div>
            <div>
                <label class="font-semibold text-sm text-gray-700 block mb-1">Kategori Produk</label>
                <select class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                    <option>--- Kategori Produk ---</option>
                    <option>Floou Mini</option>
                    <option>Floou Gantung</option>
                </select>
            </div>
            <div>
                <label class="font-semibold text-sm text-gray-700 block mb-1">Harga</label>
                <input type="text" value="Rp 89.000" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            </div>
            <div>
                <label class="font-semibold text-sm text-gray-700 block mb-1">Stok Produk</label>
                <input type="number" value="120" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            </div>

            <div class="pt-4">
                 <button class="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    Simpan
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
// Logic for updating product can go here
</script>