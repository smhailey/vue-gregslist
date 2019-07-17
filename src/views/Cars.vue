<template>
  <div class="cars container-fluid">
    <h1>Click on a car below to edit or purchase:</h1>
    <div class="row justify-content-center">




      <div class="row">
        <div class="col-12">
          <button class="btn btn-warning" @click="getCars">Get Cars!</button>
        </div>
      </div>
      <div class="row">
        <!-- cars in the v-for references the method name of the computed called "cars" -->
        <div class="car col-4 border rounded border-secondary" v-for="(car, index) in cars" :key="index"
          @click="viewCar(car)">
          <h5>{{car.make}}</h5>
          <img :src="car.imgUrl" class="img-fluid" alt="">
          <p>{{car.model}}</p>
          <p>{{car.year}}</p>
          <p>{{car.price}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'cars',
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch("getCars")

    },
    computed: {
      cars() {
        return this.$store.state.cars
      }
    },
    methods: {
      getCars() {
        this.$store.dispatch("getCars")
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>