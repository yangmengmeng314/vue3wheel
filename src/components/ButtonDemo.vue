<template>
    <div>Button示例</div>
    <h1>示例1</h1>
    <div>
        <!-- <Button @click="onClick" @focus="onFocus" @mouseover="onMouseOver">你好</Button> -->
        <Button>你好</Button>
        <Button theme="button">你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
    </div>
    <h1>示例2</h1>
    <div>
        <Button>你好</Button>
        <Button size="big">你好</Button>
        <Button size="small">你好</Button>
    </div>
    <h1>示例3</h1>
    <div>
        <Button level="main"></Button>
        <Button></Button>
        <Button level="danger"></Button>
    </div>
    <h1>示例4</h1>
    <div>
        <Button disabled>Hi</Button>
        <Button :disabled=" true ">Hi</Button>
        <Button disabled="">Hi</Button>
    </div>
    <h1>示例5</h1>
    <div>
        <Button loading>加载中</Button>
        <Button>加载完毕</Button>
    </div>
</template>

<script>
import Button from '../lib/Button.vue'
export default {
    components: {Button},
    setup(){
        const onClick = () => {
            console.log('hi')
        }
        return {onClick}
    }
}
</script>

<style>

</style>