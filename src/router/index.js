// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

import AdminLayout from '../views/admin/AdminLayout.vue';
import HomeView from '../views/user/Home.vue';
import LoginView from '../views/Login.vue';
import RegisterView from '../views/Register.vue';
import ProductDetailView from '../views/user/ProductDetail.vue';

import CartView from '../views/user/Cart.vue';
import OrderHistoryView from '../views/user/OrderHistory.vue';
import OrderDetailView from '../views/user/OrderDetail.vue';

import DashboardView from '../views/admin/Dashboard.vue';
import ProductManagementView from '../views/admin/ProductManagement.vue';
import ProductFormView from '../views/admin/ProductForm.vue';
import OrderManagementView from '../views/admin/OrderManagement.vue';
import CategoryManagementView from '../views/admin/CategoryManagement.vue';
import PlantTypeManagementView from '../views/admin/PlantTypeManagement.vue';
import KelolaAkunView from '../views/admin/KelolaAkun.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Rute Publik & Pengguna
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView, meta: { guestOnly: true } },
    { path: '/register', name: 'register', component: RegisterView, meta: { guestOnly: true } },
    { path: '/produk/:slug', name: 'product-detail', component: ProductDetailView, props: true },
    { path: '/keranjang', name: 'cart', component: CartView, meta: { requiresAuth: true } },
    { path: '/pesanan', name: 'order-history', component: OrderHistoryView, meta: { requiresAuth: true } },
    { path: '/pesanan/:id', name: 'order-detail', component: OrderDetailView, meta: { requiresAuth: true }, props: true },

    // Rute Admin
    {
      path: '/admin',
      component: AdminLayout,
      meta: { requiresAuth: true, requiresAdmin: true },
      children: [
        { path: '', redirect: { name: 'admin-dashboard' }},
        { path: 'dashboard', name: 'admin-dashboard', component: DashboardView },
        { path: 'produk', name: 'admin-products', component: ProductManagementView },
        { path: 'produk/baru', name: 'admin-product-new', component: ProductFormView },
        { path: 'produk/edit/:id', name: 'admin-product-edit', component: ProductFormView, props: true },
        { path: 'pesanan', name: 'admin-orders', component: OrderManagementView },
        { path: 'kategori', name: 'admin-categories', component: CategoryManagementView },
        { path: 'tipe-tanaman', name: 'admin-plant-types', component: PlantTypeManagementView },
        { path: 'kelola-akun', name: 'admin-accounts', component: KelolaAkunView },
      ]
    },
    
    // Fallback Route
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'login', query: { redirect: to.fullPath } });
  } else if (to.meta.guestOnly && authStore.isAuthenticated) {
    next({ name: 'home' });
  } else if (to.meta.requiresAdmin && !authStore.isAdmin) {
    next({ name: 'home' }); 
  } else {
    next();
  }
});

export default router;