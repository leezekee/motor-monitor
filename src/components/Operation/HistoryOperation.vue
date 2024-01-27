<template>
    <div>
      <div class="title">历史操作</div>
        <div class="block" v-if="isTimeVisible">
          <span class="title">起始时间</span>
          <el-date-picker
              popper-class="popperClass"
              v-model= "value1"
              type="datetime"
              placeholder="选择起始时间"
          />
        </div>
        <div class="block" v-if="isTimeVisible">
          <span class="title">终止时间</span>
          <el-date-picker
              popper-class="popperClass"
              v-model= "value2"
              type="datetime"
              placeholder="选择终止时间"
          />
        </div>
      <div v-if="!isTimeVisible">
      <el-radio-group v-if="!isTimeVisible" v-model="radio" style="flex-wrap: wrap;">
        <el-radio :label="1" border>近一天</el-radio>
        <el-radio :label="2" border>近一周</el-radio>
        <el-radio :label="3" border>近一月</el-radio>
        <el-radio :label="4" border>近三月</el-radio>
      </el-radio-group>
    </div>
        <button class="button" @click="toggleTimeVisibility">切换时间模式</button>
        <button class="button" v-if="isTimeVisible" @click="showDateRange1">刷新页面</button>
        <button class="button" v-if="!isTimeVisible" @click="showDateRange2">刷新页面</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ComprehensiveMonitorIndex from "@/pages/ComprehensiveMonitor/ComprehensiveMonitorIndex.vue";

const value1 = ref(null);
const value2 = ref(null);

let radio = ref(null)

const isTimeVisible = ref(true);
const toggleTimeVisibility = () => {
  isTimeVisible.value = !isTimeVisible.value;
}
const showDateRange1 = () => {
    const startDate = value1.value
    const endDate = value2.value

    const endTime = endDate.getTime()
    const startTime = startDate.getTime()

  const mode = ref("历史")

  console.log("历史模式")
  console.log("模式1")
  console.log("起始日期:", startTime)
  console.log("终止日期:", endTime)

}
const showDateRange2 = () => {

  let startTime = null
  let endTime = null

  if (radio.value == 1) {
     endTime = new Date().getTime()
     startTime = endTime - 24 * 60 * 60 * 1000
  }
  else if (radio.value == 2) {
    endTime = new Date().getTime()
    startTime = endTime - 7 * 24 * 60 * 60 * 1000
  }
  else if (radio.value == 3) {
    endTime = new Date().getTime()
    startTime = endTime - 30 * 24 * 60 * 60 * 1000
  }
  else if (radio.value == 4) {
    endTime = new Date().getTime()
    startTime = endTime - 90 * 24 * 60 * 60 * 1000
  }

  console.log("历史模式")
  console.log("模式2",radio.value)
  console.log("起始日期:", startTime)
  console.log("终止日期:", endTime)

  const mode = ref("历史")
  this.$emit('mode-event', mode)
  }

</script>

<style lang="scss" scoped>

.title {
    margin-top: 15px;
    font-size: 25px;
    font-weight: bold;
    color: var(--op-title-color);
    caret-color: transparent;
}

 .block .title {
   margin-top: 20px;
   font-size: 16px;
   font-weight: bold;
   color: var(--op-title-color);
 }
.block {
  margin: 15px;
}


.el-datetime-picker .block {
  padding: 20px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.el-datetime-picker .block:last-child {
  border-right: none;
}

.button{

  margin-top: 20px;
  color: var(--op-title-color);
  background-color: #27435e;
}

.el-radio-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.el-radio{
  margin-left: 20px;
  margin-right: 20px;
  margin-top:  20px;
  color: var(--op-title-color);
}

.popperClass .el-date-picker {
  width: 50px;
  height: 50px;
  .el-picker-panel__content {
    width: 50px;
    height: 50px;
    margin-left: 0;
  }
}
</style>