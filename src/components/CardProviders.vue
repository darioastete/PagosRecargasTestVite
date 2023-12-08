<template>
  <SearchComponent></SearchComponent>
  <FilterMenuComponent></FilterMenuComponent>
  <div class="flex items-center border-b-solid border-b-2 border-b-gay-500 mt-5">
    <div class="p-2 w-1/6">
      <img src="https://cdn-icons-png.flaticon.com/256/5450/5450824.png" alt="">
    </div>
    <div class="w-4/6">
      <p class="font-semibold">
        Nombre Del Proveedor
      </p>
    </div>
    <div class="p-2 w-1/6">
      <img src="https://cdn-icons-png.flaticon.com/256/5450/5450824.png" alt="">
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
  }
}
</script>

