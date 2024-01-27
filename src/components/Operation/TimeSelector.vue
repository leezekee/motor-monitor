<template>
  <div class="block">
    <span class="title">起始时间</span>
    <el-date-picker
        v-model= "value1"
        type="datetime"
        placeholder="选择起始时间"
        :shortcuts="shortcuts"
    />
  </div>
  <div class="block">
    <span class="title">终止时间</span>
    <el-date-picker
        v-model= "value2"
        type="datetime"
        placeholder="选择终止时间"
        :shortcuts="shortcuts"
    />
  </div>
  <button class="button" @click="showDateRange">刷新页面</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(null);
const value2 = ref(null);

const showDateRange = () => {
  const startDate = value1.value
  const endDate = value2.value
  const endTime = endDate.getTime()
  const startTime = startDate.getTime()
  console.log("起始日期:", startDate, startTime)
  console.log("终止日期:", endDate, endTime)
} // 测试拿到时间

// const shortcuts = [
//   {
//     text: 'Last week',
//     value: () => {
//       const end = new Date()
//       const start = new Date()
//       start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
//       return [start, end]
//     },
//   },
//   {
//     text: 'Last month',
//     value: () => {
//       const end = new Date()
//       const start = new Date()
//       start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
//       return [start, end]
//     },
//   },
//   {
//     text: 'Last 3 months',
//     value: () => {
//       const end = new Date()
//       const start = new Date()
//       start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
//       return [start, end]
//     },
//   },
// ]
</script>

<style scoped>
.block .title {
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: var(--op-title-color);
}
.block {
  margin: 15px;
}


.demo-datetime-picker .block {
  padding: 20px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-datetime-picker .block:last-child {
  border-right: none;
}

.button{
  margin-top: 20px;
  color: var(--op-title-color);
  background-color: #27435e;
}

</style>