<template>
  <div class="min-h-screen bg-[#FBF9F7] flex">
    <aside class="w-64 bg-white flex-shrink-0 p-6 flex flex-col justify-between rounded-r-3xl shadow-lg">
      <div>
        <div class="flex items-center gap-2 mb-12">
            <svg class="h-8 w-auto text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4zm0-4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"></path></svg>
            <span class="text-2xl font-bold text-green-800">Floou</span>
        </div>
        
        <nav class="space-y-3">
          <RouterLink v-for="item in navigation" :key="item.name" :to="item.href"
            :class="[
              $route.path.startsWith(item.href) // Gunakan startsWith untuk active state yang lebih baik
                ? 'bg-green-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-green-50 hover:text-gray-900',
              'group flex items-center px-4 py-3 text-base font-semibold rounded-lg relative transition-colors duration-200'
            ]">
            <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
            {{ item.name }}
            <span v-if="$route.path.startsWith(item.href)" class="absolute left-0 top-2 bottom-2 w-1 bg-white rounded-r-full"></span>
          </RouterLink>
        </nav>
      </div>
      <div class="mt-auto">
         <button class="group flex items-center w-full px-4 py-3 text-base font-semibold rounded-lg text-red-500 hover:bg-red-50 transition-colors duration-200">
            <ArrowLeftOnRectangleIcon class="mr-3 h-6 w-6"/>
            Logout
         </button>
       </div>
    </aside>

    <div class="flex-1 flex flex-col">
      <header class="flex justify-end p-6">
          <div class="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <UserCircleIcon class="w-8 h-8 text-gray-600" />
          </div>
      </header>
      
      <main class="flex-1 p-6 lg:p-10">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { 
  ChartPieIcon, 
  ArchiveBoxIcon, 
  ShoppingCartIcon, 
  UsersIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: ChartPieIcon },
  { name: 'Produk', href: '/admin/produk', icon: ArchiveBoxIcon },
  { name: 'Pesanan', href: '/admin/pesanan', icon: ShoppingCartIcon },
  { name: 'Kelola Akun', href: '/admin/kelola-akun', icon: UsersIcon },
];

const $route = useRoute();
const router = useRouter(); // Jika perlu untuk logout
</script>