/* global __injected */

import Vue from 'vue'
import Renderer from './Renderer.vue'

Vue.component('test-component', {
    data: function() {
        return {
            counter: 0
        }
    },
    template: '<button @click="counter++">{{ counter }}</button>'
})

export default new Vue({
    el: '#app',
    render: h => h(
        Renderer,
        {
            props: {
                __injected
            }
        }
    )
})

