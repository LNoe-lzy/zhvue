<template>
  <div id="app">
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
// 倒入基本组件
import Footer from './components/Footer/Footer'

export default {
  name: 'app',
  components: {
    'v-footer': Footer
  }
}
</script>

<style>

</style>
