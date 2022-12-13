<template>
    <div class="topnav flex_center">
        <div class="logo flex_center">
            <img src="https://img.alicdn.com/imgextra/i3/O1CN01faWrqb1N9PYxuP5iP_!!6000000001527-2-tps-170-170.png" alt="">
            <h2>wheel-UI</h2>
        </div>
        <ul class="menu">
            <li>Design</li>
            <li>Document</li>
            <li>Develop</li>
        </ul>
        <span class="toggleAside" @click="toggleMenu"></span>
    </div>
</template>

<script lang='ts'>
import { inject, Ref } from 'vue'
export default {
    setup(){
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        const toggleMenu = () => {
            asideVisible.value = !asideVisible.value
        }
        return {toggleMenu}
    }
}
</script>

<style lang="scss" scoped>
.topnav {background: hsl(204, 98%, 64%);display: flex;padding: 16px;position: fixed;top: 0;left: 0;width: 100%;z-index: 10;justify-content: center;align-items: center;
    > .logo {max-width: 10em;margin-right: auto;color:#fff;
        img{width: 2rem;margin-right: 10px;} 
    }
    > .menu {display: flex;white-space: nowrap;flex-wrap: nowrap;
        > li {margin: 0 1em;color:#fff;}
    }
    > .toggleAside {
        width: 24px;
        height: 24px;
        background: red;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
    }
    @media (max-width: 500px) {
        > .menu {
        display: none;
        }
        > .logo {
        margin: 0 auto;
        }
        > .toggleAside {
        display: inline-block;
        }
    }
}
</style>