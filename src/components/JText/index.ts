import { App } from 'vue'
import JText from './JText.vue'

JText.install = (app: App) => {
    app.component(JText.name, JText)
}
export default JText;