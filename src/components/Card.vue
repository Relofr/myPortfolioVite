<template>
    <div class="card">
        <img :src="`src/assets/images/` + src" alt="">
        <p id="card-title" class="fw-bold fs-secondary-heading">{{ title }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        title: { type: String },
        src: { type: String }
    }
}
</script>

<style>
.card {
    cursor: pointer;
}
#card-title {
    display: flex;
    justify-content: center;
}
</style>