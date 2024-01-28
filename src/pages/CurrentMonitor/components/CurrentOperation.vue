<template>
    <div class="sidebar-container">
        <div class="sidebar-wrapper">
            <span class="title">操作页</span>

          <history-operation @mode-event1="handleModeEvent"></history-operation>

          <real-operation @mode-event1="handleModeEvent"></real-operation>
        </div>
    </div>
</template>

<script setup>
import HistoryOperation from '@/components/Operation/HistoryOperation.vue'
import RealOperation from '@/components/Operation/RealOperation.vue'
import { ref, onMounted, watch } from 'vue'
import api from '@/api'

const emit = defineEmits(['mode-event2'])
const handleModeEvent = (mode1) => {
  emit('mode-event2', mode1)
};
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


    .title {
        font-size: 20px;
        font-weight: bold;
        color: var(--op-title-color);
    }
}
</style>