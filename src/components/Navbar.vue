<template>
    <el-menu :default-active="activeIndex" class="menu" mode="horizontal" @select="handleSelect">
        <div class="left">
            <el-menu-item index="comprehensive">综合监测</el-menu-item>
            <el-menu-item index="vibration">电机振动监测</el-menu-item>
            <el-menu-item index="magnetism">电机电磁监测</el-menu-item>
            <el-menu-item index="voice">电机声音监测</el-menu-item>
            <el-menu-item index="current">电机电流监测</el-menu-item>
        </div>
        <!-- <div class="right">
            <el-sub-menu index="color">
                <template #title>更换主题</template>
                <el-menu-item index="color-blue">静谧蓝</el-menu-item>
            </el-sub-menu>
        </div> -->
    </el-menu>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue';

const router = useRouter()
const route = useRoute()
const activeIndex = ref('vibration')

const handleSelect = (index) => {
    const basePath = route.fullPath.split('/')[1]
    if (basePath == index) return
    const uuid = route.query.uuid
    router.push({ path: index, query: { uuid } })
}

onMounted(() => {
    activeIndex.value = route.path.split('/')[1]
})
</script>

<style lang="scss" scoped>
.menu {
    height: 60px;
    width: 100%;
    margin: 0;
    padding: 0 20px;
    background-color: var(--bgcolor) !important;
    border-bottom: none !important;
    flex-direction: row !important;
    justify-content: space-between !important;

    .left {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
}

:deep(.is-active) {
    background-color: var(--menu-active-bg) !important;
    color: var(--menu-active-color) !important;
    border-bottom: var(--menu-active-color) solid 1px !important;
}

:deep(.el-menu-item) {
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    padding: 0 20px;
    line-height: 60px;
    height: 60px;
}

:deep(.el-menu-item:hover) {
    background-color: var(--menu-hover-bg) !important;
    color: var(--menu-hover-color) !important;
}

:deep(.el-sub-menu__title) {
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    padding: 0 20px;
    line-height: 60px;
    height: 60px;
    border-bottom: none !important;
}
</style>