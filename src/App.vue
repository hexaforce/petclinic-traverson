<template>
  <v-app>
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
      <BottomNvigation/>
  </v-app>
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