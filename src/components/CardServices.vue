<template>
  <router-link v-bind:to="service.destination" class="max-w-full mt-5 bg-gray-100 rounded-sm overflow-hidden flex py-1 items-center justify-center"  >
    <div class="rounded-[0.2rem] w-1/12 h-10 m-3 p-1 bg-orange-400 flex items-center justify-center">
      <img class=" object-cover" v-bind:src="service.icon" alt="Descripción de la imagen">
    </div>
    <div class="p-4 w-4/5">
      <h2 class="text-xl font-semibold"> {{ service.title, '', 2 }} </h2>
    </div>
  </router-link>
</template>
<script setup>
  defineProps({
    service:Object
  });
</script>

