<template>
    <div class="wheel-switch-box">
        <!-- <Switch v-model='bool' />-->
        <h2>Switch开关</h2>
        <div class="wheel-box-demo wheel-special">
            <div class="wheel-box-demo-item">
                <p class="wheel-title">基本用法</p>
                <Switch v-model:value='bool' />
            </div>
            <div class="wheel-code-box flex_center">code</div>
        </div>
        <div class="wheel-box-demo wheel-special">
            <div class="wheel-box-demo-item">
                <p class="wheel-title">禁用状态</p>
                <Switch v-model:value='bool' :disabled="true" />
            </div>
            <div class="wheel-code-box flex_center">code</div>
        </div>
        <div class="wheel-box-demo wheel-special">
            <div class="wheel-box-demo-item">
                <p class="wheel-title">大小</p>
                <Switch v-model:value='bool' />
            </div>
            <div class="wheel-code-box flex_center">code</div>
        </div>
        <div class="wheel-box-demo wheel-special">
            <div class="wheel-box-demo-item">
                <p class="wheel-title">文字描述</p>
                <Switch v-model:value='bool' />
            </div>
            <div class="wheel-code-box flex_center">code</div>
        </div>
        <div class="wheel-box-demo wheel-special">
            <div class="wheel-box-demo-item">
                <p class="wheel-title">loading中</p>
                <Switch v-model:value='bool' />
            </div>
            <div class="wheel-code-box flex_center">code</div>
        </div>
        <h2>Attributes</h2>
        <table></table>
        <h2>Events</h2>
        <table></table>
        <h2>Methods</h2>
        <table></table>
    </div>
</template>

<script lang='ts'>
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
export default {
    components:{Switch},
    setup() {
        const bool = ref(true)
        return {bool}
    },
}
</script>

<style>
.wheel-switch-box{padding: 20px;}
</style>