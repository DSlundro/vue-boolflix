import Vue from 'vue'
// crea un oggetto usando .observable
const state = Vue.observable({
    searchFilm: '',

})
// esporta lo state
export default state