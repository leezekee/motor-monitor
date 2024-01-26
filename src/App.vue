<template>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue';
import messageBox from './utils/messageBox';
import { useRouter } from 'vue-router';

const router = useRouter()

const useUserAgent = () => {
  const isChrome = navigator.userAgent.indexOf('Chrome') > -1
  const isFirefox = navigator.userAgent.indexOf('Firefox') > -1
  const isSafari = navigator.userAgent.indexOf('Safari') > -1
  // 移动端判定
  const isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1
  const isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  const isMobile = isAndroid || isIOS

  return {
    isChrome,
    isFirefox,
    isSafari,
    isMobile
  }
}

onMounted(() => {
  const { isChrome, isFirefox, isSafari, isOpera, isMobile } = useUserAgent()
  if (isMobile) {
    messageBox.alert("请使用PC端浏览器访问本站点，以获得最佳体验。")
  } else if (!isChrome && !isFirefox && !isSafari) {
    messageBox.alert("请使用Chrome、Firefox、Safari浏览器访问本站点，以获得最佳体验。")
  }
  router.push({ path: '/' })
})
</script>

<style lang="scss" scoped>
</style>
