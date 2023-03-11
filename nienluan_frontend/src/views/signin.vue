<template>
<formLogin @submit:user="SignIn"/>
</template>
<script>
import formLogin from '../components/formSignIn.vue'
import userService from '../services/user'
import { useRouter } from 'vue-router';
import { authStore } from '../store/auth';
export default {
    components: {formLogin},
    setup(){
        const auth = authStore();
        const router = useRouter();
        async function SignIn(data){
            try {
                console.log(data)
                const user = await userService.signIn(data);
                auth.setLogin(user._id);
                router.push({name: 'Home'});
            } catch (error) {
                console.log(error)
            }
        }

        return {
            SignIn
        }
    }
}
</script>