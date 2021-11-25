<template>
  <div class='app'>
    <user-info></user-info>    
  </div>  
</template>

<script setup>  
  import { provide } from 'vue';
  import UserInfo from './components/UserInfo.vue';  
  import userInfoState from './states/UserInfoState.js';
  import userVehiclesState from './states/UserVehiclesState.js';

  userVehiclesState.init({
    car: 'Tesla',
    bicycle: 'Cannondale',
    kickScooter: 'Mongoose',
  });
  userInfoState.init({
    name: 'Bim Bom',
    email: 'bim@bom.com',
  });

  provide('userInfo', userInfoState);
  provide('userVehicles', userVehiclesState);
</script>

<style scoped>
  .app {
    padding: 50px;
  }
</style>