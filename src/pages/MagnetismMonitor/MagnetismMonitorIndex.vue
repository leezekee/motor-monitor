<template>
    <el-container class="main-container">
        <el-main class="main-wrapper">
            <div class="charts">
                <LineChart style="height: 50%;" ref="historyLineChartRef"/>
                <LineChart style="height: 50%;" ref="realLineChartRef"/>
            </div>
        </el-main>
        <el-aside width="300px" class="side-wrapper">
            <magnetism-operation></magnetism-operation>
        </el-aside>
    </el-container>
</template>

<script setup>
import api from '@/api'
import { ref, onMounted, watch, nextTick } from 'vue'
import getNowFormatDate from '@/utils/time'
import useRouteUpdate from '@/hooks/useRouteUpdate'
import MagnetismOperation from './components/MagnetismOperation.vue'

const onRouteUpdate = useRouteUpdate()
const equipmentUuid = onRouteUpdate.equipmentUuid
const historyLineChartRef = ref(null)
const realLineChartRef = ref(null)
const equipmentInfo = ref({})

watch(equipmentUuid, (newVal, oldVal) => {
    console.log('equipmentUuid', newVal, oldVal);
    initCharts(newVal)
})

const initCharts = (uuid) => {
    getEquipmentByUuid(uuid)
    nextTick(() => {
        historyLineChartRef.value.setTitle({
            text: `${equipmentInfo.value.name} - 电磁历史图谱`,
            left: 'center',
            top: '5%',
            subtext: getNowFormatDate()
        })
        realLineChartRef.value.setTitle({
            text: `${equipmentInfo.value.name} - 电磁实时监测`,
            left: 'center',
            top: '5%',
            subtext: getNowFormatDate()
        })
    })
}

const getEquipmentByUuid = (uuid) => {
    api.equipment.getEquipmentByUuid(uuid).then(res => {
        console.log('getEquipmentByUuid', res);
        equipmentInfo.value = res
    })
}

onMounted(() => {
    initCharts(equipmentUuid.value)
})

</script>

<style lang="scss" scoped>
.main-wrapper {
    margin: 0 10px;
    width: 100%;

    .charts {
        height: calc(100% - 8px);
        width: 100%;
        overflow: hidden;
    }
}

.main-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: right;
}

.side-wrapper {
    height: calc(100vh - 68px);
}
</style>
