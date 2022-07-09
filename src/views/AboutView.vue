<template>
    <div class="container about-view">
        <Section title="My Skills" showIcons />
    </div>
</template>

<script setup>
import Section from '../components/Section.vue'
</script>

<style>
.about-view {
    height: 100vh;
}
.about-view img {
    transition: transform .2s ease;
}
.about-view img:hover {
    transform: scale(1.2);
}
</style>