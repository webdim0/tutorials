import { reactive, readonly } from 'vue';

const userInfo = reactive({
    name: '',
    email: '',
});

userInfo.setName = name => {
    userInfo.name = name;
}
userInfo.setEmail = email => {
    userInfo.email = email;
}
userInfo.init = ({name, email} = {}) => {
    if (name) {
        userInfo.setName(name);
    }
    if (email) {
        userInfo.setEmail(email);
    }    
}

export default readonly(userInfo);