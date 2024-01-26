<template>
    <div ref="lineChartRef" id="lineChart" :style="{ width: '100%', height: '100%' }"></div>
</template>

<script setup>
import useGraph from '@/hooks/useGraph'
import { ref, onMounted, onUnmounted, nextTick, defineExpose } from 'vue'


const lineChartRef = ref(null)
const graph = useGraph()
let chart = null

const data = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
}

onMounted(() => {
    chart = graph.initGraph(lineChartRef, data)
    nextTick(() => {
        const observer = new ResizeObserver(entry => {
            chart.resize()
        })
        observer.observe(lineChartRef.value)
    })
})

onUnmounted(() => {
    chart.dispose(lineChartRef)
})

const addSignalDimensionData = (data) => {
    const options = chart.getOption()
    options.series[0].data.push(...data)
    chart.setOption(options)
}

const addMultiDimensionData = (datas) => {
    const options = chart.getOption()
    if (options.series.length != datas.length) {
        throw new Error('The length of datas must be equal to the length of series')
    }
    for (let i = 0; i < datas.length; i++) {
        options.series[i].data.push(datas[i])
    }
    chart.setOption(options)
}

const setAxis = (xAxis, yAxis) => {
    chart.setOption({
        xAxis, 
        yAxis
    })
}

const setData = (data) => {
    chart.setOption({
        series: data
    })
}

const setTitle = (title) => {
    chart.setOption({
        title
    })
}

defineExpose({
    addSignalDimensionData,
    addMultiDimensionData,
    setAxis,
    setData,
    setTitle
})
</script>

<style lang="scss" scoped>
</style>