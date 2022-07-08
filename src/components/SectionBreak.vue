<template>
    <div class="sectionBlock">
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
    background-color: var(--clr-primary-400);
    color: var(--clr-primary);
    font-size: var(--fs-32);
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin: 70px;
}
</style>