<template>
  <SearchComponent></SearchComponent>
  <FilterMenuComponent></FilterMenuComponent>
  <div class="flex items-center border-b-solid border-b-2 border-b-gay-500 mt-5" v-for="(provider, index) in providers" :key="index">
    <div class="p-2 w-1/6">
      <img v-bind:src="validateImage(provider.image)" alt="">
    </div>
    <div class="w-4/6">
      <p class="font-semibold">
        {{ provider.company }}
      </p>
    </div>
    <div class="p-2 w-1/6">
      <img src="https://cdn-icons-png.flaticon.com/256/5450/5450824.png" :alt="provider.company">
    </div>
  </div>
</template>
<script>
import SearchComponent from './SearchComponent.vue'
import FilterMenuComponent from './FilterMenuComponent.vue'
export default {
  name: 'CardProviders',
  components: {
    SearchComponent,
    FilterMenuComponent
  },
  props: {
    providers: Array,
  },
  data() {
    return {
      defaultImage: 'https://cdn-icons-png.flaticon.com/256/5450/5450824.png'
    }
  },
  methods: {
    validateImage(url) {
      const img = new Image();
      img.src = url;
      return img.complete ? url : this.defaultImage;
    }
  },
}
</script>

