import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'tailwindcss/tailwind.css'
import '../src/assets/style.css'
import  VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App)
.use(router)
.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCSzfUbej6lqw-ZZED-iUxp9yZcH_dGeCw',
  },
})
  .mount('#app')