<template>
    <router-link :to="`/` + route">
        <div class="card">
            <img :src="`src/assets/images/` + src" alt="">
            <p id="card-title" class="fw-bold fs-secondary-heading">{{ title }}</p>
        </div>
    </router-link>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        route: { type: String },
        title: { type: String },
        src: { type: String }
    }
}
</script>

<style lang="less" scoped>
a {
    color: var(--clr-primary-text);
}

.card {
    cursor: pointer;
}

.card img {
    border-radius: 3px;
    width: 100%;
    height: 350px;
    object-fit: cover;
    margin-bottom: 15px;
    transition: transform .2s ease;
    &:hover {
        transform: scale(1.09);
        // box-shadow: 0 0 20px 8px #d0d0d0;
    }
}

#card-title {
    display: flex;
    justify-content: center;
    text-align: center;
}
</style>