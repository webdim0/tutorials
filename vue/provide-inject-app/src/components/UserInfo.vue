<template>
    <div class="user-info">
        <div>
            user neme: <input v-model="userName">
            <button @click="updateUserName">update</button>            
        </div>        
        <div>
            user car: <input v-model="userCar">            
        </div>
        <div>
            user bicycle: <input v-model="userBicycle">
            <button @click="updateUserBicycle">update</button>
        </div>        
        <div>user email: {{ email }}</div>
    </div>
    <div class="vehicles">
        <user-vehicles></user-vehicles>
    </div>
</template>

<script setup>
    import { ref, inject, computed } from 'vue';
    import UserVehicles from './UserVehicles.vue';
    
    const userInfo = inject('userInfo');

    let userName = ref(userInfo.name);
    let email = userInfo.email;

    const updateUserName = () => {
        userInfo.setName(userName.value);
    }

    const userVehicles = inject('userVehicles');
    let userCar = computed({
      get: () => userVehicles.car.value,
      set: userVehicles.setCar
    });
    
    let userBicycle = ref(userVehicles.bicycle.value);
    
    const updateUserBicycle = () => {
       userVehicles.setBicycle(userBicycle.value);
    }
</script>

<style scoped>
    .user-info {
        display: flex;
        flex-direction: column;
    }
        .user-info > div {
            padding: 3px 0;
        }
    .vehicles {
        margin-top: 20px;
    }
    button {
        margin-left: 5px;
    }
</style>