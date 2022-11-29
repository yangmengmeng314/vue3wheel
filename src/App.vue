<template>
    <router-view />
</template>

<script>
import Frank from './components/Frank.vue'

export default {
    name: 'App',
    components: {
        Frank
    }
}
</script>
<style>
    @import 'assets/public.css'; /*引入公共样式*/
</style>