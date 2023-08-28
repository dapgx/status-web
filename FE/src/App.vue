<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/layouts/Navbar'
</script>

<template>
    <header>
        <Navbar />
    </header>
    <main class="mx-10 mt-8">
        <RouterView />
    </main>
</template>