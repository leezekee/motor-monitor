<template>
    <el-container class="main-container">
        <el-main class="main-wrapper">
            <div class="charts">
                <LineChart style="height: 25%;" ref="vibrationRef" />
                <LineChart style="height: 25%;" ref="magnetismRef" />
                <LineChart style="height: 25%;" ref="voiceRef" />
                <LineChart style="height: 25%;" ref="currentRef" />
            </div>
        </el-main>
        <el-aside width="300px" class="side-wrapper">
            <comprehensive-operation></comprehensive-operation>
        </el-aside>
    </el-container>
</template>

<script setup>
import api from '@/api'
import { ref, watch, onMounted, nextTick } from 'vue'
import getNowFormatDate from '@/utils/time'
import useRouteUpdate from '@/hooks/useRouteUpdate'
import LineChart from '@/components/Graphs/LineChart.vue'
import ComprehensiveOperation from './components/ComprehensiveOperation.vue'

const onRouteUpdate = useRouteUpdate()
const equipmentUuid = onRouteUpdate.equipmentUuid
const vibrationRef = ref(null)
const magnetismRef = ref(null)
const voiceRef = ref(null)
const currentRef = ref(null)
const mode = ref('实时')
const equipmentInfo = ref({})

watch(equipmentUuid, (newVal, oldVal) => {
    console.log('equipmentUuid', newVal, oldVal);
    initCharts(newVal)
})

const initCharts = (uuid) => {
    getEquipmentByUuid(uuid)
    nextTick(() => {
        if (!equipmentInfo.value) {
            return
        }
        vibrationRef.value.setTitle({
            text: `${equipmentInfo.value.name} - 振动${mode.value}图谱`,
            left: 'center',
            top: '5%',
            subtext: getNowFormatDate()
        })
        magnetismRef.value.setTitle({
            text: `${equipmentInfo.value.name} - 电磁${mode.value}图谱`,
            left: 'center',
            top: '5%',
            subtext: getNowFormatDate()
        })
        voiceRef.value.setTitle({
            text: `${equipmentInfo.value.name} - 声音${mode.value}图谱`,
            left: 'center',
            top: '5%',
            subtext: getNowFormatDate()
        })
        currentRef.value.setTitle({
            text: `${equipmentInfo.value.name} - 电流${mode.value}图谱`,
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