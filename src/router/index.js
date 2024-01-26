import { createRouter, createWebHistory } from 'vue-router';
import HomeIndex from '@/pages/HomeIndex.vue'
import VibrationMonitorIndex from '@/pages/VibrationMonitor/VibrationMonitorIndex.vue'
import MagnetismMonitorIndex from '@/pages/MagnetismMonitor/MagnetismMonitorIndex.vue'
import VoiceMonitorIndex from '@/pages/VoiceMonitor/VoiceMonitorIndex.vue'
import CurrentMonitorIndex from '@/pages/CurrentMonitor/CurrentMonitorIndex.vue'
import ComprehensiveMonitorIndexVue from '@/pages/ComprehensiveMonitor/ComprehensiveMonitorIndex.vue';


const routes = [
    {
        path: '/',
        component: HomeIndex,
        children: [
            {
                path: '',
                redirect: 'comprehensive'
            },
            {
                path: 'comprehensive',
                component: ComprehensiveMonitorIndexVue
            },
            {
                path: 'vibration',
                component: VibrationMonitorIndex
            },
            {
                path: 'magnetism',
                component: MagnetismMonitorIndex
            },
            {
                path: 'voice',
                component: VoiceMonitorIndex
            },
            {
                path: 'current',
                component: CurrentMonitorIndex
            } 
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
