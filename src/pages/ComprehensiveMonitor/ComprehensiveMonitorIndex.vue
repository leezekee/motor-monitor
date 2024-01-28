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
            <comprehensive-operation @mode-event2="handleModeEvent"></comprehensive-operation>
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
import HistoryOperation from "@/components/Operation/HistoryOperation.vue";
import RealOperation from "@/components/Operation/RealOperation.vue";

const onRouteUpdate = useRouteUpdate()
const equipmentUuid = onRouteUpdate.equipmentUuid
const vibrationRef = ref(null)
const magnetismRef = ref(null)
const voiceRef = ref(null)
const currentRef = ref(null)
const equipmentInfo = ref({})
//我想把HistoryOperation和RealOperation里面传来的a值传到这里成为mode，然后根据mode值来判断是实时模式还是历史模式
let mode = ref("实时")
const handleModeEvent = (mode1) => {
    mode = mode1
    console.log(mode.value)
};

watch(equipmentUuid, (newVal, oldVal) => {
    console.log('equipmentUuid', newVal, oldVal);
    initCharts(newVal)
})

const initCharts = (uuid) => {
    getEquipmentByUuid(uuid)
    nextTick(() => {
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