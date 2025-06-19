<template>
  <div class="min-h-screen bg-[#FBF9F7] flex">
    <aside class="w-64 bg-white flex-shrink-0 p-6 flex flex-col justify-between rounded-r-3xl">
      <div>
        <div class="flex items-center gap-2 mb-12">
            <svg class="h-8 w-auto text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4zm0-4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"></path></svg>
            <span class="text-2xl font-bold text-green-800">Floou</span>
        </div>
        
        <nav class="space-y-3">
          <RouterLink v-for="item in navigation" :key="item.name" :to="item.href"
            :class="[
              item.href === $route.path
                ? 'bg-green-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-green-50 hover:text-gray-900',
              'group flex items-center px-4 py-3 text-base font-semibold rounded-lg relative'
            ]">
            <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
            {{ item.name }}
            <span v-if="item.href === $route.path" class="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></span>
          </RouterLink>
        </nav>
      </div>
    </aside>

    <div class="flex-1 flex flex-col">
      <header class="flex justify-end p-6">
          <div class="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          </div>
      </header>
      
      <main class="flex-1 p-6 lg:p-10">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { shallowRef } from 'vue'

// Import icons (you might need a library like heroicons)
const DashboardIcon = (props) => h('svg', { ...props, fill: 'currentColor', viewBox: '0 0 20 20' }, [h('path', { d: 'M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' })]);
const ProductIcon = (props) => h('svg', { ...props, fill: 'currentColor', viewBox: '0 0 20 20' }, [h('path', { 'fill-rule': 'evenodd', d: 'M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4z', 'clip-rule':'evenodd' })]);
const OrderIcon = (props) => h('svg', { ...props, fill: 'currentColor', viewBox: '0 0 20 20' }, [h('path', { d: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z' })]);
const AccountIcon = (props) => h('svg', { ...props, fill: 'currentColor', viewBox: '0 0 20 20' }, [h('path', { d: 'M10 9a3 3 0 100-6 3 3 0 000 6zM10 11a6 6 0 00-6 6v1a1 1 0 001 1h10a1 1 0 001-1v-1a6 6 0 00-6-6z' })]);

// For simplicity, we are defining icons as simple functional components. 
// It's better to use a library like `@heroicons/vue`.
const h = (tag, attrs, children) => ({
  functional: true,
  render: () => h(tag, attrs, children)
});

const navigation = shallowRef([
  { name: 'Dashboard', href: '/admin/dashboard', icon: DashboardIcon },
  { name: 'Produk', href: '/admin/produk', icon: ProductIcon },
  { name: 'Pesanan', href: '/admin/pesanan', icon: OrderIcon },
  { name: 'Kelola Akun', href: '/admin/kelola-akun', icon: AccountIcon },
]);

const $route = useRoute();
</script>