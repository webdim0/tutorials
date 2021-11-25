import { reactive, computed } from 'vue';

const userVehicles = reactive({
    car: '',
    bicycle: '',
    kickScooter: '',
});

const init = ({car, bicycle, kickScooter} = {}) => {
    if (car) {
        setCar(car);
    }
    if (bicycle) {        
        setBicycle(bicycle);
    }
    if (kickScooter) {
        setKickScooter(kickScooter);
    }
}

const setCar = car => {
    userVehicles.car = car;
}
const setBicycle = bicycle => {
    userVehicles.bicycle = bicycle;
}
const setKickScooter = kickScooter => {
    userVehicles.kickScooter = kickScooter;
}

export default {
    car: computed(() => userVehicles.car),
    bicycle: computed(() => userVehicles.bicycle),
    kickScooter: computed(() => userVehicles.kickScooter),
    list: computed(() => userVehicles),
    init,
    setCar,
    setBicycle,
    setKickScooter,    
};