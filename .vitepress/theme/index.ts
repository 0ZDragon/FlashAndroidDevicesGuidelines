import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import Score from './components/Score.vue'
import Emoji from './components/Emoji.vue'
import ToolInfo from './components/ToolInfo.vue'
import FileInput from './components/FileInput.vue'

// import './styles/override/custom.scss'
// import './styles/override/blur.scss'
// import './styles/override/zoom.scss'
import './styles/index.scss'

import Layout from './Layout.vue'

export default <Theme>{
    Layout: Layout,
    extends: DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
        const { app } = ctx
        
        app.component('Score', Score)
        app.component('Emoji', Emoji)
        app.component('ToolInfo', ToolInfo)
        app.component('FileInput', FileInput)
    }
}