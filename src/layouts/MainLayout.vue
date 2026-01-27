<template>
    <main class="min-h-screen flex flex-col px-10">
        <Header />
        <section class="content grow flex justify-center items-center flex-col gap-5">
            <p class="text-5xl font-bold">For content Lorem, ipsum....</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>
        <Footer />
    </main>
</template>
<script setup>
    import Header from '../components/partials/Header.vue';
    import Footer from '../components/partials/Footer.vue';
</script>