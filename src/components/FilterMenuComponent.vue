<template>
  <div>
  <ul class="mt-5 w-full space-x-0 flex justify-content-start overflow-x-auto overflow-hidden hover:overflow-x-hidden">
    <li class="px-2" v-for="(filter, index) in filterList" :key="index">
      <button class="rounded-3xl border-solid border-2 border-orange-300 py-1 px-3"> {{ filter.title }} </button>
    </li>
  </ul>
  </div>
</template>
<script>
export default {
  name:'FilterMenuComponent',
  data() {
    return {
      filterList: [
        {title: 'Todas', icon: 'icono'},
        {title: 'Favoritas', icon: 'icono'},
        {title: 'Telefonia', icon: 'icono'},
        {title: 'Otros', icon: 'icono'},
      ]
    }
  },
}
</script>
