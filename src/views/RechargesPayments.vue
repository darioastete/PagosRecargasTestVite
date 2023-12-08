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
    getProviders(){
      axios.get(`/api/getProviders`,{
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Indpbmdlcmxpb24uY3VscWkiLCJleHAiOjE3MDY5NDIxNjR9.j7_UICJFBvPiHv_bhnoRNprVU_DaML41Vjmd51jcRDI"
        }
      })
      .then((response) => {
          console.log('RESPONSE=',response)
        })
      .catch(err=>console.log(err))
    }
  },
}
</script>
