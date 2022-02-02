import { Theme } from 'vitepress'
import { createHead } from '@vueuse/head'
import 'windi.css'

import Layout from './components/Layout.vue'
import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'

const head = createHead()

export default <Theme>{
  Layout,
  enhanceApp: ({ app }) => {
    app.use(head)
  }
}
