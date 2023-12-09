<template>
  <div class="p-5">
    <CardProviders :providers="providersList"></CardProviders>
  </div>
</template>
<script>
  import CardProviders from '../components/CardProviders.vue';
  import ApiService from '../services/ApiService';
  import { onMounted, ref } from 'vue';
export default {
  name: 'RechargesPayment',
  components: {
    CardProviders,
  },
  setup () {
    let providersList = ref([]);
    onMounted(async () => {
      const apiService = new ApiService();
      const response = await apiService.getProviders();
      providersList.value = response;
    })
    return {
      providersList
    }
    
  },
}
</script>
