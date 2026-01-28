<template>
    <main class="min-h-screen flex flex-col">
        <Header />
        <section class="content p-5 grow flex justify-center items-center flex-col gap-5">
            <Presentation/>
        </section>
        <Footer />
    </main>
</template>
<script setup>
    import Header from '../components/partials/Header.vue';
    import Footer from '../components/partials/Footer.vue';
    import Presentation from '../pages/Presentation.vue';
</script>