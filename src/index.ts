import {App} from 'vue'

import JText from './components/JText'

const components = [
    JText
]

const install = (app: App) => {
    components.forEach(component => {
        app.component(component.name , component)
    })
}
export {
    JText,
    install
}
export default {
    install
}