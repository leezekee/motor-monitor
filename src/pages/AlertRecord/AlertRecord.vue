<template>
    <el-table :data="tableData" height="650" style="width: 99%; margin-top: 20px" :row-class-name="rowLevel">

        <el-table-column prop="id" label="编号" width="100" />
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="level" label="报警级别" width="180" />
        <el-table-column prop="detail" label="详情" />
    </el-table>

    <el-pagination v-model:current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next, jumper"
        :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" class="pagination"/>
</template>

<script setup>
import api from '@/api'
import { ref, onMounted } from 'vue'
const tableData = ref([])
const currentPage = ref(1)
const pageSize = ref(20)
const total = ref(1)
const datas = []

onMounted(() => {
    api.alert.getRecords().then(res => {
        console.log(res)
        total.value = res.data.total
        datas.value = res.data.items
        pageSize.value = res.data.page
        tableData.value = datas.value.slice(0, 20)
    })
})


const handleSizeChange = (val) => {
    console.log('每页' + val + '条');
}

const handleCurrentChange = (val) => {
    const start = (val - 1) * pageSize.value
    const end = val * pageSize.value
    tableData.value = datas.value.slice(start, end)
}

const rowLevel = ({ row, rowIndex}) => {
    if (row.level === '一级') {
        return 'level-one'
    } else if (row.level === '二级') {
        return 'level-two'
    } else if (row.level === '三级') {
        return 'level-three'
    }
}

</script> 

<style lang="scss" scoped>
:deep(.level-one) {
    color: var(--level-one) !important;
}

:deep(.level-two) {
    color: var(--level-two) !important;
}

:deep(.level-three) {
    color: var(--level-three) !important;
}

:deep(.el-table__header .cell) {
    color: var(--title-color) !important;
}

:deep(.el-table__cell) {
    background-color: var(--conbgcolor) !important;
}

:deep(.number) {
    background-color: var(--conbgcolor) !important;
    color: var(--title-color) !important;
}
:deep(.btn-prev) {
    background-color: var(--conbgcolor) !important;
    color: var(--title-color) !important;
}
:deep(.btn-quicknext) {
    background-color: var(--conbgcolor) !important;
    color: var(--title-color) !important;
}
:deep(.btn-quickprev) {
    background-color: var(--conbgcolor) !important;
    color: var(--title-color) !important;
}
:deep(.btn-next) {
    background-color: var(--conbgcolor) !important;
    color: var(--title-color) !important;
}

:deep(.is-in-pagination .el-input__wrapper) {
    background-color: var(--conbgcolor) !important;
    color: var(--title-color) !important;
}
:deep(.is-in-pagination .el-input__wrapper:focus) {
    border: var(--title-color) 1px solid !important;
}

:deep(.is-in-pagination .el-input__wrapper .el-input__inner) {
    background-color: var(--conbgcolor) !important;
    color: var(--title-color) !important;
}

:deep(.el-pagination__total) {
    background-color: var(--conbgcolor) !important;
    color: var(--title-color) !important;

}

:deep(.el-pager .is-active) {
    color: var(--title-color) !important;
    font-weight: 800 !important;
    font-size: 16px;
}

:deep(.el-table__body-wrapper) {
    background-color: var(--conbgcolor) !important;
}

:deep(.el-pagination__goto) {
    background-color: var(--conbgcolor) !important;
    color: var(--title-color) !important;

}

.pagination {
    margin-top: 10px;
}


</style>