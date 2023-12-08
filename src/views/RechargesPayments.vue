<template>
  <div class="p-5">
    <CardProviders></CardProviders>
  </div>
</template>
<script>
  import CardProviders from '../components/CardProviders.vue';
 // import ApiService from '../services/ApiService';
  import axios from "axios";
export default {
  name: 'RechargesPayment',
  components: {
    CardProviders,
  },
  data() {
    return {
    }
  },
  created() {
    this.getProviders();
  },
  methods: {
    async getProviders(){
      //ApiService.getProviders().then((response)=>{ console.log(response)});
      //console.log('ES ERROR',response)
      axios.get(`http://bun-burn-env.eba-ftyx2m3h.us-east-1.elasticbeanstalk.com/getProviders`)
        .then((response) => {
          console.log(response)
        })
      .catch(err=>console.log(err))
    }
  },
}
</script>
