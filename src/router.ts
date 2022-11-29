import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes:[
        { path:'/', component:Home },
    ]
})
router.afterEach(() => {
    console.log('路由切换了')
})