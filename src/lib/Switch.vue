<template>
    <button class="wheel-switch" @click="toggle" :class="{'wheel-checked': value}"><span></span></button>
</template>

<script lang='ts'>
import { ref } from 'vue'
export default {
    props:{
        value: Boolean
    },
    setup(props,context) {
        const toggle = () => {
            context.emit('update:value', !props.value)
        }
        return {toggle}
    },
    
}
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  .wheel-switch{
    height: $h;
    width: $h*2;
    border: none;
    background: grey;
    border-radius: $h/2;
    position: relative;
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    border-radius: $h2 / 2;
    transition: left 250ms;
  } 
  .wheel-switch.wheel-checked{background: blue}
  .wheel-switch.wheel-checked > span{
      left:calc(100% - #{$h2} - 2px)
  }
  .wheel-switch:focus{outline: none;}
</style>