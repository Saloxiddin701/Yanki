<template>
  <Navbar />
  <router-view />
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from '@/layouts/navbar/index.vue'

export default {
  methods: {
    ...mapActions('ui', ['CHANGE_WINDOW_WIDTH']),
    changeWindowWidth() {
      this.CHANGE_WINDOW_WIDTH(window.innerWidth)
    }
  },
  components: {
    Navbar
  },
  mounted() {
    this.changeWindowWidth()
    window.addEventListener('resize', this.changeWindowWidth)
  }
}
</script>

<style lang="scss">
@import url(./assets/styles/main.scss);
</style>