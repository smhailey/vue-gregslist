<template>
  <div class="cars container-fluid">
    <h1>Click on a car below to edit or purchase:</h1>
    <div class="row">
      <!-- <div class="row justify-content-left"> -->
      <form @submit.prevent="addCar">
        <!-- <form class="col-12 pb-5" @submit.prevent="addCar"> -->
        <div class="form-group">
          <label for="make">Make</label>
          <input type="text" name="make" class="form-control" id="make" placeholder="Enter make" v-model="newCar.make">
        </div>
        <div class="form-group">
          <label for="model">Model</label>
          <input type="text" name="model" class="form-control" id="model" placeholder="Enter model"
            v-model="newCar.model">
        </div>
        <div class="form-group">
          <label for="year">Year</label>
          <input type="number" name="year" class="form-control" id="year" min="1900" max="2019" placeholder="Enter year"
            v-model="newCar.year">
        </div>
        <div class="form-group">
          <label for="img">Image</label>
          <input type="text" name="image" class="form-control" id="img" placeholder="Enter image url"
            v-model="newCar.imgUrl">
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" name="price" class="form-control" id="price" placeholder="Enter price"
            v-model="newCar.price">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <div class="row">
      <!-- cars in the v-for references the method name of the computed called "cars" -->
      <div class="car col-4 border rounded border-secondary" v-for="(car, index) in cars" :key="index"
        @click="viewCar(car)">
        <img :src="car.imgUrl" class="img-fluid" alt="">
        <h5>{{car.make}}</h5>
        <p>{{car.model}}</p>
        <p>{{car.year}}</p>
        <p>{{car.price}}</p>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'cars',
    data() {
      return {
        newCar: {}
      }
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
      addCar() {
        this.$store.dispatch('addCar', this.newCar)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>