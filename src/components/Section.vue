<template>
    <div class="section-container">
        <div v-show="heroImage" class="section-container">
            <img class="hero-image" :src="`src/assets/images/` + heroImage">
            <div class="section-title fw-bold fs-56 text-accent">{{ sectionTitle }}</div>
        </div>
        <div class="even-columns" :class="{ 'reverseColumns': isReverse }">
            <div v-show="contentOne" class="col fw-semi-bold">
                <p class="fw-bold fs-primary-heading">{{ sectionTitle }}</p>
                <p>{{ contentOne }}</p>
            </div>

            <div v-show="showImage" class="section-container">
                <img v-show="src" class="hero-image" :src="`src/assets/images/` + src">
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        heroImage: {
            type: String,
        },
        sectionTitle: {
            type: String,
        },
        skillsTitle: {
            type: String,
        },
        sectionTitle: {
            type: String
        },
        contentOne: {
            type: String,
        },
        contentTwo: {
            type: String,
        },
        headingType: {
            type: String,
        },
        showImage: {
            type: Boolean,
        },
        isReverse: {
            type: Boolean
        },
        src: {
            type: String
        }
    }
}
</script>

<style>
.section-container {
    position: relative;
    text-align: center;
}

.section-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* border: 1px solid #fff; */
    padding: 10px;
    /* background-color: rgba(0, 0, 0, .60); */
}

.hero-image {
    width: 100%;
    height: 400px;
    background-position: center;
    object-fit: cover;
    text-align: center;
    border-radius: 3px;
}

.even-columns {
    display: flex;
    align-items: center;
    gap: 1em;
}

.even-columns>* {
    flex: 1;
}

.reverseColumns {
    flex-direction: row-reverse;
}
</style>