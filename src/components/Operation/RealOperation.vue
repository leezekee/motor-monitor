<template>
  <div>
    <div class="title" >实时操作</div>


    <button class="button" @click="showDateRange">刷新页面</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showDateRange = () => {
  const mode = ref("实时")
  this.$emit('mode-event', mode);
  console.log("实时模式")
}
</script>

<style lang="scss" scoped>

.title {
  margin-top: 40px;
  font-size: 25px;
  font-weight: bold;
  color: var(--op-title-color);
  caret-color: transparent;
}

.button{
  margin-top: 30px;
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

</style>