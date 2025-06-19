import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import AdminLayout from '../views/admin/AdminLayout.vue'

// Halaman Pengguna (User)
import HomeView from '../views/user/Home.vue'
import CartView from '../views/user/Cart.vue'
import CheckoutSuccessView from '../views/user/CheckoutSuccess.vue'

// Halaman Otentikasi
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'

// Halaman Admin
import DashboardView from '../views/admin/Dashboard.vue'
import ProductAdminView from '../views/admin/ProductView.vue'
import EditProductView from '../views/admin/EditProduct.vue'
import OrderListView from '../views/admin/DaftarPesanan.vue'
import AccountManagementView from '../views/admin/KelolaAkun.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Rute untuk Pengguna
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/keranjang',
      name: 'cart',
      component: CartView
    },
    {
      path: '/selesaikan-pesanan',
      name: 'checkout-success',
      component: CheckoutSuccessView
    },
    // Rute untuk Otentikasi
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    
    // Rute untuk Admin dengan Layout Khusus
    {
      path: '/admin',
      component: AdminLayout,
      // Di sini bisa ditambahkan route guard untuk proteksi halaman admin
      children: [
        {
          path: '', // Default ke dashboard jika /admin diakses
          redirect: '/admin/dashboard'
        },
        {
          path: 'dashboard',
          name: 'admin-dashboard',
          component: DashboardView
        },
        {
          path: 'produk',
          name: 'admin-product',
          component: ProductAdminView
        },
        {
          path: 'produk/edit/:id', // Rute untuk edit produk berdasarkan ID
          name: 'admin-edit-product',
          component: EditProductView
        },
        {
          path: 'produk/baru', // Rute untuk membuat produk baru
          name: 'admin-new-product',
          component: EditProductView // Bisa menggunakan komponen yang sama untuk edit/baru
        },
        {
          path: 'pesanan',
          name: 'admin-orders',
          component: OrderListView
        },
        {
          path: 'kelola-akun',
          name: 'admin-accounts',
          component: AccountManagementView
        }
      ]
    }
  ]
})

export default router