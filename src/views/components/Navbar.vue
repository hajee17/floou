<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
      <RouterLink to="/" class="flex items-center space-x-2">
        <svg width="32" height="32" viewBox="0 0 24 24" class="text-floou-green"><path fill="currentColor" d="M12.9 4.8c-.7-.1-1.3.4-1.4 1.1c-1.1 5.4-4.5 9.4-9.3 11.5c-.6.2-1 .8-.8 1.4c.2.6.8 1 1.4.8c5.4-2.3 9.2-6.8 10.4-12.8c.1-.7-.4-1.3-1.1-1.4c-.1 0-.3 0-.3 0m7.1.3c-.7-.4-1.5-.2-1.9.5c-2.3 4.2-6.3 7.3-11.1 8.5c-.7.1-1.1.7-1 1.4c.1.7.7 1.1 1.4 1c5.3-1.2 9.8-4.8 12.3-9.5c.4-.7.2-1.5-.5-1.9Z"/></svg>
        <span class="text-2xl font-bold text-gray-800">Floou</span>
      </RouterLink>
      <div>
        <RouterLink to="/keranjang">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 hover:text-floou-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4z" /></svg>
        </RouterLink>
         <RouterLink to="/login" class="ml-4">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 hover:text-floou-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>