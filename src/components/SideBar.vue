<template>
    <div class="sidebar-container">
        <div class="sidebar-wrapper" v-if="visible">
            <el-input v-model="filterText" placeholder="搜索" />
            <el-tree ref="treeRef" :data="data" :props="defaultProps" :filter-node-method="filterNode"
                @node-click="handleNodeClick" :render-content="renderTree" :current-node-key="currentKey"/>
        </div>
        <div class="close-button">
            <left-tri v-if="visible" @click="visible = false; emit('update:visible', false);" />
            <right-tri v-else @click="visible = true; emit('update:visible', true);" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import api from '@/api'
import LeftTri from '@/components/Icon/LeftTri.vue'
import RightTri from '@/components/Icon/RightTri.vue'
import DangerOnLine from '@/components/Icon/DangerOnLine.vue'
import OffLine from '@/components/Icon/OffLine.vue'
import SafeOnLine from '@/components/Icon/SafeOnLine.vue'

const data = ref([])
const visible = ref(true)
const treeRef = ref(null)
const filterText = ref('')
const currentKey = ref('')

const defaultProps = {
    children: 'children',
    label: 'label'
}

const emit = defineEmits(['update:visible', 'update:equipment'])

watch(filterText, (val) => {
    treeRef.value.filter(val)
})

const filterNode = (value, data) => {
    if (!value) return true
    return data.label.includes(value)
}

const getEquipmentList = () => {
    api.equipment.getEquipmentList().then(res => {
        res.forEach((item, index) => {
            if (index == 0) {
                currentKey.value = item.id
            }
            const obj = {
                id: item.id,
                label: item.name,
                status: item.status,
                uuid: item.uuid
            }
            data.value.push(obj)
        })
        emit('update:equipment', res[0])
    })
}

const renderTree = (h, { node, data, store }) => {
    if (data.status == 0) {
        // 离线状态
        return h('span', { style: { display: 'flex', alignItems: 'center' } }, [
            h(OffLine, { style: { marginRight: '5px' } }),
            h('span', {
                style: {
                    marginLeft: '5px', fontSize: '13px'
                }
            }, data.label)
        ])
    } else if (data.status == 1) {
        // 在线状态
        return h('span', { style: { display: 'flex', alignItems: 'center' } }, [
            h(SafeOnLine, { style: { marginRight: '5px' } }),
            h('span', {
                style: {
                    marginLeft: '5px', fontSize: '13px',
                }
            }, data.label)
        ])
    } else if (data.status == -1) {
        // 危险状态
        return h('span', { style: { display: 'flex', alignItems: 'center' } }, [
            h(DangerOnLine, { style: { marginRight: '5px' } }),
            h('span', {
                style: {
                    marginLeft: '5px', fontSize: '13px'
                }
            }, data.label)
        ])
    }
}

const handleNodeClick = (data, node, treeNode, event) => {
    emit('update:equipment', data)
}

onMounted(() => {
    getEquipmentList()
})
</script>

<style lang="scss" scoped>
.sidebar-container {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.sidebar-wrapper {
    padding: 10px;
    height: 100%;
    width: 100%;
    background-color: var(--bgcolor);
}

:deep(.el-tree) {
    background-color: var(--bgcolor);
    margin-top: 10px;
}

:deep(.el-input__wrapper) {
    background-color: var(--bgcolor);
}

:deep(.el-tree-node__content) {
    color: var(--text-color);
    margin: 2px 0;
}

:deep(.el-tree-node__content:hover) {
    color: var(--active-text-color);
    background-color: var(--bgcolor);
}

:deep(.is-current) {
    .el-tree-node__content {
        font-weight: 600;
        color: var(--active-text-color);
        background-color: var(--bgcolor);
    }
}

.close-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bgcolor);
    height: 40px;
    width: 20px;
    cursor: pointer;
}</style>