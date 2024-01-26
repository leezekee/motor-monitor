import * as echarts from 'echarts'
import dark from '../../static/dark.json'
import getNowFormatDate from '@/utils/time'

export default function useGraph() {
    const pulicOptions = {
        grid: {
            left: '5%',
            right: '5%',
            top: '20%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
        },
        title: {
            text: '折线图',
            left: 'center',
            top: '5%',
            subtext: getNowFormatDate()
        },
        toolbox: {
            feature: {
                saveAsImage: {},
                dataZoom: {},
            }
        },
        legend: {
            type: 'plain',
            bottom: '3%',
            icon: 'circle',
            selectorLabel: {
                show: true,
                color: '#a9a9a9'
            }
        }
    }

    function initGraph(ref, options) {
        echarts.registerTheme('dark', dark)
        const chart = echarts.init(ref.value, 'dark')
        const option = {
            ...pulicOptions,
            ...options
        }

        chart.setOption(option)
        return chart;
    }

    function getPulicOptions() {
        return pulicOptions
    }

    function updatePublicOptions(options) {
        pulicOptions = {
            ...pulicOptions,
            ...options
        }
    }

    return {
        initGraph,
        getPulicOptions,
        updatePublicOptions
    }
}