<template>
  <v-layout row wrap>
    <v-flex>
      <v-tabs v-model="active" color="cyan" dark slider-color="yellow" >
        <v-tab v-for="n in 3" :key="n" ripple >Item {{ n }} </v-tab>
        <v-tab-item v-for="n in 3" :key="n" >
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
      <div class="text-xs-center mt-3">
        <v-btn @click="next">next tab</v-btn>
      </div>
    </v-flex>
    <v-flex>
      <PieChart/>
    </v-flex>
    <v-flex>
      <LineChart/>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        active: null,
        text: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      }
    }
  }
</script>
<script>
import PieChart from '@/components/PieChart.vue'
import LineChart from '@/components/LineChart.vue'

export default {
  name: 'total1',
  components: {
    PieChart,
    LineChart
  }
}
</script>