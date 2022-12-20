<template>
    <button class="wheel-switch" @click="toggle" :class="classObject"><span></span></button>
</template>

<script lang='ts'>
export default {
    props:{
        value: Boolean,
        disabled: {
            type: Boolean,
            defult:true
        }
    },
    setup(props,context) {
        var that = this;
        const toggle = () => {
            // if(that.disabled) return;
            context.emit('update:value', !props.value)
        }
        return {toggle}
    },
    computed:{
        classObject:function(){
            return {
                'wheel-checked': this.value,
                'is-disabled': this.disabled
            }
        }
    }
}
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  .wheel-switch{height: $h;width: $h*2;border: none;background: grey;border-radius: $h/2;position: relative;cursor: pointer;}
  span{position: absolute;top: 2px;left: 2px;height: $h2;width: $h2;background:white;border-radius: $h2 / 2;transition: left 250ms;} 
  .wheel-switch.wheel-checked{background: rgb(19, 206, 102)}
  .wheel-switch.wheel-checked > span{left:calc(100% - #{$h2} - 2px)}
  .wheel-switch:focus{outline: none;}
  .wheel-switch.is-disabled{opacity: .6;cursor: not-allowed;}
</style>