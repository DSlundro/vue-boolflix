<template>
  <div id="app">
    <HeaderComponent />
    <SliderComponent />
    <MainComponent />
  </div>
</template>

<script>
import MainComponent from '@/components/MainComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import SliderComponent from '@/components/SliderComponent.vue'

export default {
  name: 'App',
  components: {
    MainComponent,
    HeaderComponent,
    SliderComponent
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
</style>
