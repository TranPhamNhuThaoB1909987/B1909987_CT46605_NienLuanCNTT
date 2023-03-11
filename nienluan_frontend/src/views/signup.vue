<template>
    <formSignUp @submit:user="signUp"/>
</template>

<script>
import userService from '../services/user';
import formSignUp from '../components/formSignUp.vue';
import {useRouter} from 'vue-router'
import { authStore } from '../store/auth';
export default {
    components: {formSignUp},
    setup(){
        const auth = authStore();
        const router = useRouter();
        async function signUp(user){
            try {
                const newUser = await userService.signUp(user);
                router.push({name: 'SignIn'});
            }catch(error){
                console.log(error);
            }
        }

        return {signUp}
    }
}
</script>
