<template>
  <div class="text-lg bg-black text-white font-medium p-6 rounded-b-3xl text-center flex items-center h-16">
    <div class="w-1/6">
      <svg v-if="showBackButton" @click="goBack" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
    </div>
    <div class="w-5/6 flex items-center justify-center">
      <div class="absolute top-9 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span>
          {{ getPageTitle }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
  name:"NavbarComponent",
  computed: {
    getPageTitle(){
      return this.$route.meta.title || 'Culqi'
    },
    showBackButton(){
      return this.$route.meta.showBackButton !== false && this.$route.path !== '/';
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  },
}
</script>
