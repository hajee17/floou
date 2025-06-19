<template>
  <div class="min-h-screen bg-[#F9F5F2] md:grid md:grid-cols-2">
    <div class="flex flex-col justify-center items-center px-6 py-12 lg:px-8 bg-white">
      <div class="w-full max-w-sm">
        <div>
            <svg class="h-10 w-auto text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4zm0-4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"></path></svg>
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Welcome to Floou
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                Bring Nature Closer to You!
            </p>
        </div>

        <form class="mt-8 space-y-6" action="#" method="POST">
            <div class="space-y-4">
                <div>
                    <label for="email-address" class="font-semibold text-sm">Email</label>
                    <input id="email-address" name="email" type="email" autocomplete="email" required
                        class="mt-1 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                        placeholder="Masukkan email anda">
                </div>
                <div>
                    <label for="password" class="font-semibold text-sm">Password</label>
                    <div class="relative">
                        <input id="password" name="password" type="password" autocomplete="new-password" required
                            class="mt-1 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                            placeholder="Buat password anda">
                        <span class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" /></svg>
                        </span>
                    </div>
                </div>
                <div>
                    <label for="confirm-password" class="font-semibold text-sm">Konfirmasi Password</label>
                    <div class="relative">
                        <input id="confirm-password" name="confirm-password" type="password" autocomplete="new-password" required
                            class="mt-1 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                            placeholder="Konfirmasi password anda">
                        <span class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" /></svg>
                        </span>
                    </div>
                </div>
            </div>


          <div>
            <button type="submit"
              class="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-6">
              Daftar
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            Sudah punya akun?
            <a href="/login" class="font-medium text-green-600 hover:text-green-500">Masuk Sekarang</a>
        </p>
      </div>
    </div>

    <div class="hidden md:block">
        <img class="h-full w-full object-cover" src="/images/plant.jpg" alt="Potted plants">
    </div>
  </div>
</template>

<script setup>
// Logika untuk registrasi bisa ditambahkan di sini
</script>