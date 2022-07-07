<script setup>
import Section from '../components/Section.vue';
import SectionBreak from '../components/SectionBreak.vue';
</script>

<template>
    <Section bgColor="bg-accent-400" fontColor="text-accent-100" fontSize="fs-secondary-heading" title="Millicent"
        leftContent="Is my favorite" rightContent="Is very cool" />

    <SectionBreak title="Design"/>

    <Section bgColor="bg-secondary-400" fontColor="text-primary-100" fontSize="fs-secondary-heading" title="Me"
        leftContent="HELLO" rightContent="HI" />

    <Section bgColor="bg-primary-400" fontColor="text-accent-400" fontSize="fs-secondary-heading" title="Skills"
        leftContent="" rightContent="right content" />
</template>