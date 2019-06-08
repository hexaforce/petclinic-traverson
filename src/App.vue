<template>
  <div id="app">
    <router-view/>
    <BottomNvigation/>
  </div>
</template>

<script>
import BottomNvigation from '@/components/BottomNvigation.vue'
export default {
  name: 'app',
  components: {
    BottomNvigation
  },
  data () {
    return {
    }
  }
}
</script>