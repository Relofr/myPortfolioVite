<template>
    <div class="container sectionBlock fw-bold text-accent fs-32">
        {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.sectionBlock {
    display: flex;
    height: 120px;
    background-color: var(--clr-secondary);
    border-radius: 3px;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin: 80px 0px;
}
</style>