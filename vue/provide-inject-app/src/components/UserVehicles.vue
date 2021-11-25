<template>
    <div class="vehicles">
        {{ userVehicles.car.value }}
        <div v-for="vehicle in userVehiclesList" :key="vehicle.type">
            {{ vehicle.type }}: {{ vehicle.name }}
        </div>        
    </div>
    <div class="vehicles-bottom">        
        Vehicles of {{userName}} or {{ userInfo.name }}.
    </div>
</template>

<script setup>
    import { computed, inject } from 'vue';

    const userInfo = inject('userInfo');
    const userVehicles = inject('userVehicles');
     
    let userName = computed(() => userInfo.name);    
    let userVehiclesList = computed(() => Object.entries(userVehicles.list.value).map(el => ({ type: el[0], name: el[1] })));
</script>

<style scoped>
    .vehicles {
        display: flex;
        flex-direction: column;
    }
        .vehicles > div {
            padding: 3px 0;
        }
    .vehicles-bottom {
        color: cadetblue;
        margin-top: 10px;
    }
</style>