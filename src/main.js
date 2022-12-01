import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import vClickOutside from "click-outside-vue3"

const app = createApp(App, router)
app.use(vClickOutside)
app.mount('#app')
app.use(router)


