import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import.meta.env.VITE_APP_TITLE

const app = createApp(App)

app.use(router)
app.use(ElementPlus, {
    locale: zhCn
  })

app.mount('#app')
