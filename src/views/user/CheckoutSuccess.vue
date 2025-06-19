<template>
  <div class="bg-[#F9F5F2] min-h-screen flex flex-col font-sans text-[#333]">
    <header class="container mx-auto px-6 py-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
            <svg class="w-8 h-8 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"></path></svg>
            <span class="text-2xl font-bold text-green-800">Floou</span>
        </div>
        <div>
          <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        </div>
      </div>
    </header>

    <main class="flex-grow container mx-auto px-6 py-12 flex flex-col items-center">
      <h1 class="text-3xl font-bold text-center mb-10">Selesaikan Pesanan</h1>
      
      <div class="w-full max-w-4xl flex flex-col md:flex-row gap-10 lg:gap-16">
        
        <div class="flex-shrink-0 w-full md:w-auto flex justify-center">
          <div class="bg-white p-6 rounded-2xl shadow-md text-center inline-block">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=Example" alt="QRIS Code" class="w-56 h-56 md:w-64 md:h-64">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/QRIS_logo.svg/1200px-QRIS_logo.svg.png" alt="QRIS Logo" class="h-8 mx-auto mt-4">
          </div>
        </div>

        <div class="w-full md:flex-1">
            <div class="bg-white p-6 rounded-2xl shadow-md border border-gray-200 h-full">
                <h2 class="text-xl font-semibold mb-5">Ringkasan Pesanan</h2>
                
                <div class="space-y-3 text-gray-700">
                    <div class="flex justify-between">
                        <span>2 x Kaktus Bola Kecil</span>
                        <span>Rp 60.000</span>
                    </div>
                    <div class="flex justify-between">
                        <span>1 x Jade Plant Elegance</span>
                        <span>Rp 89.000</span>
                    </div>
                    <div class="flex justify-between">
                        <span>1 x Bambu Air</span>
                        <span>Rp 39.000</span>
                    </div>
                    <div class="flex justify-between">
                        <span>1 x Sirih Gading Golden</span>
                        <span>Rp 58.000</span>
                    </div>
                </div>

                <hr class="my-4 border-dashed">

                <div class="flex justify-between text-gray-700 mb-4">
                    <span>Diskon</span>
                    <span class="text-green-600">-Rp 15.000</span>
                </div>

                <hr class="my-4">

                <div class="flex justify-between font-bold text-lg">
                    <span>Total Harga</span>
                    <span>Rp 231.000</span>
                </div>
            </div>
        </div>

      </div>
    </main>

    <footer class="container mx-auto px-6 py-6 mt-12">
      <div class="flex items-center gap-4">
        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4zm0-4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"></path></svg>
        <span class="text-lg font-bold text-green-800">Floou</span>
      </div>
      <p class="text-sm text-gray-500 mt-2">&copy; 2025 Floou. All rights reserved</p>
    </footer>
  </div>
</template>

<script setup>
// Di sini Anda dapat menambahkan logika jika diperlukan,
// misalnya mengambil detail pesanan dari state management (Pinia/Vuex)
// atau dari route params. Untuk contoh ini, data bersifat statis.
</script>

<style>
/* Anda dapat menambahkan font kustom di sini jika diperlukan */
/* @import url('https://fonts.googleapis.com/css2?family=YourChosenFont&display=swap'); */
/* body { font-family: 'YourChosenFont', sans-serif; } */
</style>