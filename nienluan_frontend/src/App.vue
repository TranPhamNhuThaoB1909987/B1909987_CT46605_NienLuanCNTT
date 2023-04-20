<script setup>
import HeaderComponent from './components/header.vue'
import FooterComponent from './components/footer.vue'
import { onMounted } from 'vue';
import { authStore } from './store/auth';
import { useRouter } from 'vue-router';
const auth = authStore();
const router = useRouter();
onMounted(() => {
    auth.checkUser();
    if (auth.role == 'admin') {
        router.push({ name: 'adminPage' });
    } else {
        router.push({ name: 'Home' });
    }
})
</script>

<template>
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
</template>

<style scoped></style>
