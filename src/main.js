import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

import { faSpinner, faCircleNotch } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faLinkedin, faSquareGithub, faSpinner, faCircleNotch)

const app = createApp(App)

app.use(createPinia())

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
