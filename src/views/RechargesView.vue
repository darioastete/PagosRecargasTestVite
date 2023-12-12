<template>
  <div class="p-5">
    <div class="px-4">
      <h1 class="font-semibold text-lg text-slate-500">Saldo virtual</h1>
      <p class="font-bold text-4xl">S/ {{ balanceCommerce }} </p>
      <div class="p-1 rounded-2xl w-4/5 text-center border-solid border-2 border-gray-200 mt-2">
        <span class="recharge-title text-slate-800">¿Cómo cargar mi saldo virtual?</span>
      </div>
      <p class="font-medium my-5 text-slate-600">Código para cargar tu saldo: <span class="text-cyan-500">{12345678901}</span></p>
    </div>
    <hr>
    <CardServices v-for="(service, index) in servicesList" :key="index" v-bind:service="service"></CardServices>
  </div>
</template>
<script>
import CardServices from '../components/CardServices.vue'
import ApiService from '../services/ApiService.js'
import { onBeforeUnmount, onMounted, ref } from 'vue';
import axios from 'axios';
export default {
  name: 'RechargesView',
  components: {
    CardServices
  },
  props: {
    
  },
  data() {
    return {
      servicesList: [
        {title: 'Recargas', destination: '/recharges-payments', icon:'https://cdn-icons-png.flaticon.com/256/5450/5450824.png'},
        {title: 'Pago de servicios', destination: '/', icon:'https://cdn-icons-png.flaticon.com/256/5450/5450824.png'},
        {title: 'Historial de ganancias y operaciones', destination: '/', icon:'https://cdn-icons-png.flaticon.com/256/5450/5450824.png'},
      ],
    }
  },
  setup(){
    let balanceCommerce = ref('0.00')
    let cancelToken = ref(axios.CancelToken.source());
    onMounted(async () => {
      let apiService = new ApiService();
      let response = await apiService.getActualBalance({cancelToken: cancelToken.value.token });
      balanceCommerce.value = response;
    })
    onBeforeUnmount(() => {
      cancelToken.value.cancel('Componente desmontado');
    })


    return { balanceCommerce }
  },
}
</script>
