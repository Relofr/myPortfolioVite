<template>
    <router-link :to="`/` + route">
        <div class="card">
            <img :src="`src/assets/images/` + src" alt="">
            <div class="title-container flex">
                <p id="card-text" class="fw-bold fs-18 text-primary">{{ title }}</p>
                <p v-show="date" id="card-text" class="fw-semi-bold fs-13 text-secondary">{{ date }}</p>
            </div>
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
        date: { type: String },
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
    margin-bottom: 50px;
}

.card img {
    border-radius: 4px;
    width: 100%;
    height: 325px;
    object-fit: cover;
    margin-bottom: 25px;
    transition: transform .2s ease;

    -webkit-box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);

    &:hover {
        transform: scale(1.04);
        -webkit-box-shadow: 0 16px 24px 2px rgb(0 0 0 / 16%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -7px rgb(0 0 0 / 20%);
        box-shadow: 0 16px 24px 2px rgb(0 0 0 / 16%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -7px rgb(0 0 0 / 20%);
    }
}

.title-container {
    justify-content: space-around;
}

#card-text {
    display: flex;
    justify-content: space-between;
    text-align: center;
}
</style>