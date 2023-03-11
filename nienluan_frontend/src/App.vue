<script setup>
import HeaderComponent from './components/header.vue'
import FooterComponent from './components/footer.vue'
import { onMounted } from 'vue';
import { authStore } from './store/auth';
const auth = authStore();

onMounted(() => {
    auth.checkUser();
    console.log(auth.login)
    console.log(auth.userID)
})
</script>

<template>
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
</template>

<style scoped>

</style>
