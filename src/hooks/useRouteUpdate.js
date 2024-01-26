import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

export default function useRouteUpdate() { 
    const router = useRouter()
    const route = useRoute()
    const equipmentUuid = ref('')
    router.beforeEach((to, from, next) => {
        equipmentUuid.value = to.query.uuid
        next()
    })
    onMounted(() => {
        equipmentUuid.value = route.query.uuid
    })
    return { equipmentUuid } 
}