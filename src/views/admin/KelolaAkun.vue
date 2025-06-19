<template>
    <div class="space-y-6">
        <h1 class="text-3xl font-bold">Kelola Akun</h1>

        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left text-sm">
                    <thead class="bg-green-100 text-green-800 font-semibold">
                        <tr>
                            <th class="p-4">No</th>
                            <th class="p-4">ID Akun</th>
                            <th class="p-4">Email</th>
                            <th class="p-4">Role</th>
                            <th class="p-4">Terakhir Login</th>
                            <th class="p-4">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in users" :key="user.id" class="border-b">
                            <td class="p-4 font-medium text-gray-800">{{ index + 1 }}</td>
                            <td class="p-4 font-medium text-gray-800">{{ user.id }}</td>
                            <td class="p-4 text-gray-600">{{ user.email }}</td>
                            <td class="p-4">
                               <span :class="[user.role === 'Admin' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800', 'text-xs font-medium px-2 py-1 rounded-full']">{{ user.role }}</span>
                            </td>
                            <td class="p-4 text-gray-600">{{ user.lastLogin }}</td>
                            <td class="p-4">
                                <div class="flex gap-2">
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
const users = [
    { id: 'USR0001', email: 'rizky.ramadhan@email.com', role: 'User', lastLogin: '8 Apr 2025, 14:22' },
    { id: 'USR0002', email: 'intan.maha@email.com', role: 'User', lastLogin: '8 Apr 2025, 09:03' },
    { id: 'ADM0001', email: 'clara.yt@email.com', role: 'Admin', lastLogin: '07 Apr 2025, 21:47' },
    { id: 'ADM0002', email: 'budi.sts@email.com', role: 'Admin', lastLogin: '06 Apr 2025, 16:12' },
    { id: 'USR0004', email: 'nur.azizah@email.com', role: 'User', lastLogin: '08 Apr 2025, 13:44' },
    { id: 'USR0003', email: 'dimas.wck@email.com', role: 'User', lastLogin: '08 Apr 2025, 15:10' },
    { id: 'USR0004', email: 'laila.khr@email.com', role: 'User', lastLogin: '08 Apr 2025, 10:35' },
    { id: 'ADM0004', email: 'siti.rhm@email.com', role: 'Admin', lastLogin: '12 Apr 2025, 12:10' },
    { id: 'ADM0005', email: 'sarah.amel@email.com', role: 'Admin', lastLogin: '06 Apr 2025, 17:30' },
    { id: 'USR0005', email: 'hendra.wjy@email.com', role: 'User', lastLogin: '02 Apr 2025, 11:10' },
];
</script>