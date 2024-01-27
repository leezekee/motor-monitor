<template>
    <div class="sidebar-container">
        <div class="sidebar-wrapper">
            <span class="title">操作页</span>
          <history-operation></history-operation>

          <real-operation></real-operation>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import api from '@/api'
import RealOperation from "@/components/Operation/RealOperation.vue";
import HistoryOperation from "@/components/Operation/HistoryOperation.vue";

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