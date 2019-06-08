<template>
  <v-container fluid grid-list-xl>
  <v-layout>
    <v-flex>
      <v-hover>
        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto" width="344" >
          <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" ></v-img>
          <v-card-title>
            <div>
              <span class="headline">Cafe Badilico</span>
              <div class="d-flex">
                <v-rating :value="value" color="amber" dense half-increments readonly size="14" ></v-rating>
                <div class="ml-2 grey--text text--darken-2">
                  <span>{{ value }}</span>
                  <span>({{ reviews }})</span>
                </div>
              </div>
            </div>
            <v-spacer></v-spacer>
            <v-btn icon class="mr-0">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-hover>
      <v-form>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm6 md3>
              <v-text-field label="Regular" ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md3>
              <v-text-field label="Regular" placeholder="Placeholder" ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-flex>
  </v-layout>
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex>
        <v-select :items="items" label="Outline style" outline ></v-select>
      </v-flex>
      <v-flex xs12 sm6 d-flex>
        <v-select :items="items" label="Solo field" solo ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      reviews: 413,
      value: 4.5,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz']
    })
  }
</script>
