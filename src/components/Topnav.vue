<template>
    <div class="topnav flex_center">
        <div class="logo">LOGO</div>
        <ul>
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <span class="toogleAside" @click="toggleMenu"></span>
    </div>
</template>

<script lang='ts'>
import { inject, Ref } from 'vue'
export default {
    setup(){
        
    }
}
</script>

<style lang='scss' scoped>
.topnav{}
</style>