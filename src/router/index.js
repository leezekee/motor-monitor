import { createRouter, createWebHistory } from 'vue-router';
import HomeIndex from '@/pages/HomeIndex.vue'
import VibrationMonitorIndex from '@/pages/VibrationMonitor/VibrationMonitorIndex.vue'
import SignalMonitorIndex from '@/pages/SignalMonitor/SignalMonitorIndex.vue'

const routes = [
    {
        path: '/',
        component: HomeIndex,
        children: [
            {
                path: '',
                redirect: 'vibration'
            },
            {
                path: 'vibration',
                component: VibrationMonitorIndex
            },
            {
                path: 'signal',
                component: SignalMonitorIndex
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
