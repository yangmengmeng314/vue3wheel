<template>
    <div>
        <Topnav />
        <div class="banner">
            <p class="tip">当前默认版本为1.2.0版本</p>
            <video style="height:100%;object-fit:contain;width: 100%;" autoplay="" muted="" loop="">
                <source src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*uYT7SZwhJnUAAAAAAAAAAAAADgCCAQ" type="video/webm">
                <source src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/file/A*XYYNQJ3NbmMAAAAAAAAAAAAAARQnAQ" type="video/mp4">
            </video>
            <div class="content-box flex_column_center">
                <h1>wheel-UI</h1>
                <h2>致力于为开发缩短时间，更加美化产品</h2>
                <p class="actions">
                    <a href="https://github.com">GitHub</a>
                    <router-link to="/doc">开始</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import Topnav from '../components/Topnav.vue'
export default {
    components:{ Topnav }
}
</script>

<style lang="scss" scoped>
.banner {
  padding: 70px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .tip{padding-bottom: 8px;color: #828282;}
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
  .content-box{padding: 10px 0;
    h1{font-size: 68px;letter-spacing: 2px;font-weight: bold;margin: 20px 0;font-family: AliPuHui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}
  }
}
</style>