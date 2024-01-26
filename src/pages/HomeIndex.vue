<template>
    <el-container class="container">
        <el-header class="header">
            <nav-bar />
        </el-header>
        <el-container>
            <el-aside :style="`width: ${sideBarWitdth}`">
                <side-bar @update:visible="handleVisibleUpdate" @update:equipment="handleEquipmentUpdate"/>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import NavBar from '@/components/Navbar.vue'
import SideBar from '@/components/SideBar.vue'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const sideBarWitdth = ref('250px')

const handleVisibleUpdate = (val) => {
    if (val) {
        sideBarWitdth.value = '250px'
    } else {
        sideBarWitdth.value = '20px'
    }
}

const handleEquipmentUpdate = (data) => {
    const basePath = route.fullPath
    const uuid = data.uuid
    router.push({ path: `${basePath}`, query: { uuid }})
}
</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
    width: 100%;
    background-color: var(--conbgcolor);
}

.header {
    padding: 0 !important;
    background-color: var(--bgcolor) !important;
    border-bottom: none !important;
    margin-bottom: 8px;
}

:deep(.el-main) {
    padding: 0 !important;
}
</style>
