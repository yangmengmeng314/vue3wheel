<template>
    <div class="layout">
        <Topnav class="nav" />
        <div class="content">
            <aside v-if="asideVisible">
                <p class="category-title">安装</p>
                <ol>
                    <li>快速上手</li>
                    <li>自定义主题</li>
                </ol>
                <p class="category-title">组件列表</p>
                <ol>
                    <li v-for="item in tab_list" :key="item.url" :class="current_tab == item.url ? 'tab-actived' : ''" @click="changeTab(item)">
                        <router-link :to='item.url'>{{item.title}}</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view class="main-content"></router-view>
            </main>
        </div>
    </div>
</template>

<script lang='ts'>
import Topnav from '../components/Topnav.vue'
import { inject, Ref } from 'vue'
import { reactive, ref } from 'vue'
import { toRaw } from '@vue/reactivity'
export interface BaseOptions {
    title:string,
    url:string
}
export default {
    components:{Topnav},
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        var tab_list = reactive<BaseOptions[]>([
            {
                title:'Switch 组件',
                url:'/doc/switch',
            },{
                title:'Button 组件',
                url:'/doc/button',
            },{
                title:'Dialog 组件',
                url:'/doc/dialog',
            },{
                title:'Tabs 组件',
                url:'/doc/tabs',
            }
        ])
        tab_list = toRaw(tab_list)
        let current_tab: Ref<string> = ref('/doc/switch')
        function changeTab(item) {
            const tab = toRaw(item)
            current_tab.value = tab.url
            console.log(current_tab,'changeTab')
        }
        console.log(current_tab,'current_tab')
        return {asideVisible, tab_list, changeTab, current_tab}
    },
}
</script>

<style lang="scss" scoped>
.layout {display: flex;flex-direction: column;height: 100vh;
    .nav {flex-shrink: 0;}
    .content {flex-grow: 1;padding-top: 60px;padding-left: 180px;
        @media (max-width: 500px) {padding-left: 0; }
    }
}
.content {display: flex;
    aside {flex-shrink: 0;}
    main {flex-grow: 1;padding: 16px;background: #f5f5f5;
        .main-content{background: #fff;height: 100%;border-radius: 15px;box-shadow: 4px 4px 6px rgba(156, 163, 163, 0.25);}
    }
    .category-title{font-size: 12px;color: #999;margin: 10px 0;}
}
aside {width: 180px; padding: 16px;position: fixed;top: 0;left: 0;padding-top: 70px;height: 100%;
  h2 {margin-bottom: 4px;}
  ol {
    li {padding: 8px 0;padding-left: 20px;margin:10px 0;
        a:hover{border: none;}
    }
    li:active,li:focus,li:target{background: #409eff;color: #fff;border-radius: 200px;}
  }
  .tab-actived{background: #409eff;color: #fff;border-radius: 200px;}
}
main {overflow: auto;}
</style>