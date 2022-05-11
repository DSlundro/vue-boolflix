import Vue from 'vue'
// crea un oggetto usando .observable
const state = Vue.observable({
    query: '',

})
// esporta lo state
export default state