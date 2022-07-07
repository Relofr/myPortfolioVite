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

<style>
.sectionBlock {
    display: flex;
    width: 100%;
    height: 120px;
    background-color: var(--clr-primary-400);
    color: var(--clr-accent-100);
    font-size: var(--fs-800);
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin: 80px 0px 80px 0px;
}
</style>